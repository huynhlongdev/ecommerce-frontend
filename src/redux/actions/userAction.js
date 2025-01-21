import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUserAction = createAsyncThunk(
  "users/register",
  async (payload, { rejectWithValue }) => {
    const { email, username, password } = payload;
    try {
      //   const response = await axios.post("/api/v1/auth/register", {
      //     email,
      //     username,
      //     password,
      //   });

      return ["abc"];
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const loginUserAction = createAsyncThunk(
  "users/login",
  async (payload, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
