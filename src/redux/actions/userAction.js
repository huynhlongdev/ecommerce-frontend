import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

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
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
