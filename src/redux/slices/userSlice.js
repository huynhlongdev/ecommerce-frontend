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
    error: false,
    userInfo: {},
  },
};

const userSlide = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle register
    builder.addCase(registerUserAction.pending, (state) => {
      state.userAuth.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.userAuth.loading = false;
      state.userAuth.userInfo = action.payload;

      console.log("state", state);
      console.log("action", action);
    });
    builder.addCase(registerUserAction.rejected, (state) => {
      state.userAuth.loading = false;
    });

    // handle login
    builder.addCase(loginUserAction.pending, (state) => {});
    builder.addCase(loginUserAction.fulfilled, (state) => {});
    builder.addCase(loginUserAction.rejected, (state) => {});
    //
  },
});

// export const {} = userSlide.actions

export default userSlide.reducer;
