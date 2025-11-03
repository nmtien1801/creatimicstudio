import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiAuth from "../apis/ApiAuth.js";

const initialState = {
  userInfo: {},
};

export const Login = createAsyncThunk(
  "auth/Login",
  async (data, thunkAPI) => {
    const response = await ApiAuth.LoginApi(data);
    return response;
  }
);

export const Register = createAsyncThunk(
  "auth/Register",
  async (data, thunkAPI) => {
    const response = await ApiAuth.RegisterApi(data);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    // Login
    builder
      .addCase(Login.pending, (state) => {})
      .addCase(Login.fulfilled, (state, action) => {
        if (action.payload.EC === 0) {
          state.userInfo = action.payload.DT || {};
        }
      })
      .addCase(Login.rejected, (state, action) => {});

    // Register
    builder
      .addCase(Register.pending, (state) => {})
      .addCase(Register.fulfilled, (state, action) => {})
      .addCase(Register.rejected, (state, action) => {});
  },
});

// Export actions
export const {} = authSlice.actions;

// Export reducer
export default authSlice.reducer;
