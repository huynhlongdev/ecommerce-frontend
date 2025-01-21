import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction, loginUserAction } from "../actions/userAction";

const initialState = {
  error: false,
  loading: false,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
  },
};

const userSlide = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle register
    builder.addCase(registerUserAction.pending, (state) => {});
    builder.addCase(registerUserAction.fulfilled, (state) => {});
    builder.addCase(registerUserAction.rejected, (state) => {});

    // handle login
    builder.addCase(loginUserAction.pending, (state) => {});
    builder.addCase(loginUserAction.fulfilled, (state) => {});
    builder.addCase(loginUserAction.rejected, (state) => {});
    //
  },
});

// export const {} = userSlide.actions

export default userSlide.reducer;
