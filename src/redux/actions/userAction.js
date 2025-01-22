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
      const response = await axios.post(`${baseUrl}/auth/login`, payload);

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
