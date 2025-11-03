import axios from "axios";
import { toast } from "react-toastify"; // nếu bạn dùng react-toastify
import Cookies from "js-cookie";
import axiosRetry from "axios-retry";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    responseType: "json",
});

// Cấu hình retry -> khi sử dụng refresh token
axiosRetry(api, {
    retries: 2, // Số lần retry tối đa
    retryDelay: (retryCount) => {
        console.log(`Retry attempt: ${retryCount}`);
        return retryCount * 100; // Thời gian delay giữa các lần retry (ms)
    },
    retryCondition: (error) => {
        // Điều kiện để thực hiện retry -> retry refresh token khi bất đồng bộ
        return error.response?.status === 403; // Retry nếu lỗi là 400
    },
});

// 🧩 Interceptor request
api.interceptors.request.use((config) => {
    const token = Cookies.get("accessToken");

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

// 🧩 Interceptor response
api.interceptors.response.use(
    (response) => (response && response.data ? response.data : response),
    async (error) => {
        const status = error.response?.status || 500;

        switch (status) {
            case 401: {
                const path = window.location.pathname;
                console.log('ssssssss', path);

                if (
                    path === "/" ||
                    path === "/login" ||
                    path === "/register" ||
                    path === "/forgot-password"
                ) {
                    console.warn("401 on auth page, skip refresh");
                    return Promise.reject(error);
                }
                // window.location.href = "/login";
                return Promise.reject(error);
            }

            case 400: {
                return error.response.data; // Bad request
            }

            case 403: {
                const res = await api.post("/auth/refreshToken");
                const newAccessToken = res.DT.accessToken;

                Cookies.set("accessToken", newAccessToken);

                const config = error.config;
                config.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return api.request(config);
            }

            case 404: {
                toast.error("Không tìm thấy tài nguyên.");
                return Promise.reject(error);
            }

            case 409: {
                return Promise.reject(error);
            }

            case 422: {
                return Promise.reject(error);
            }

            default: {
                return Promise.reject(error); // Lỗi server bất ngờ
            }
        }
    }
);

// 🧩 Wrapper API
export const ApiManager = {
    get: async (url, { params } = {}) => {
        const res = await api.get(url, { params });
        return res;
    },
    post: async (url, body, query) => {
        const res = await api.post(url, body, { params: query });
        return res;
    },
    put: async (url, data) => {
        const res = await api.put(url, data);
        return res;
    },
    delete: async (url, data) => {
        const res = await api.delete(url, { data });
        return res;
    },
    patch: async (url, data) => {
        const res = await api.patch(url, data);
        return res;
    },
};

export default ApiManager;
