import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { toast } from "react-toastify";

// Register action
export const registerUserAction = createAsyncThunk(
  "users/register",
  async (payload, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, {
        email: payload?.email,
        password: payload?.password,
        username: payload?.username,
      });

      // Show noti
      toast.success(response?.data?.message);

      return response?.data;
    } catch (error) {
      // console.log(">>>", error);
      // Show noti
      toast.error(error?.response?.data?.message || "Register failed");

      return rejectWithValue(
        error?.response?.data?.message || "Register failed"
      );
    }
  }
);

// Login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, payload, {
        withCredentials: true,
      });

      localStorage.setItem("accessToken", response?.data?.token);

      // Show noti
      toast.success(response?.data?.message || "Login success");

      return response?.data;
    } catch (error) {
      // Show noti
      toast.error(
        error?.response?.data?.message || "Email or password in wrong"
      );

      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);

export const forgotPasswordUserAction = createAsyncThunk(
  "users/forgot-password",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/forgot-password`,
        payload
      );

      // Show noti
      toast.success(response?.data?.message || "Send mail successfully");

      return response?.data;
    } catch (error) {
      // Show noti
      toast.error(
        error?.response?.data?.message || "Email or password in wrong"
      );

      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);

export const resetPasswordUserAction = createAsyncThunk(
  "users/reset-password",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/reset-password?token=${token}`,
        { token, password }
      );

      // Show noti
      toast.success(response?.data?.message || "Send mail successfully");

      return response?.data;
    } catch (error) {
      // Show noti
      toast.error(
        error?.response?.data?.message || "Email or password in wrong"
      );

      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);

export const activeUserAction = createAsyncThunk(
  "users/active_user",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/active?token=${token}`,
        { token }
      );

      // Show noti
      toast.success(response?.data?.message || "Send mail successfully");

      return response?.data;
    } catch (error) {
      // Show noti
      toast.error(
        error?.response?.data?.message || "Email or password in wrong"
      );

      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);
