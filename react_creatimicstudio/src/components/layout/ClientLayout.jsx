import React, { useEffect, useRef, useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../header/HeaderClient";
import Footer from "../footer";

function ClientLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const categories = [
        { name: "Cho thuê không gian Studio", subs: ["Micro thu âm Condenser", "Tai nghe kiểm âm", "Phụ kiện Studio"] },
        { name: "Cho thuê thiết bị Studio", subs: ["Soundcard giá rẻ", "Mixer chất lượng cao", "Micro quay MV"] },
        { name: "Bộ livestream - thu âm cơ bản", subs: [] },
        { name: "Soundcard - Mixer", subs: ["Soundcard giá rẻ", "Soundcard thu âm", "Mixer giá rẻ"] },
        { name: "Tai nghe kiểm âm", subs: ["Tai nghe Kiểm Âm In-ear", "Tai nghe kiểm âm phòng thu"] },
        { name: "Microphone", subs: [] },
        { name: "Box Livestream", subs: [] },
        { name: "Phụ kiện thu âm", subs: [] },
        { name: "Loa", subs: [] },
        { name: "Thiết bị Like-new chính hãng", subs: [] },
    ];

    return (
        <div className="h-screen w-full bg-gray-50 text-gray-800 font-sans overflow-hidden">
            <div className="flex flex-col h-full transition-all duration-300">
                {/* Header */}
                <Header
                    categories={categories}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />

                {/* Main Content */}
                <main className="flex-grow overflow-auto">
                    <Outlet />
                    <Footer />
                </main>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000} // tự đóng sau 3 giây
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}

export default ClientLayout;
