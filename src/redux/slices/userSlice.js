import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction, loginUserAction } from "../actions/userAction";

const initialState = {
  error: false,
  loading: false,
  users: [],
  user: {},
  profile: {},
  message: "",
  userAuth: {
    loading: false,
    error: false,
    userInfo: {},
  },
};

const userSlide = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.error = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // handle register
    builder.addCase(registerUserAction.pending, (state) => {
      state.userAuth.loading = true;
      state.error = false;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.userAuth.loading = false;
      state.userAuth.userInfo = action.payload;
      state.message = "User registered successfully!";
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.userAuth.loading = false;
      state.error = true;
      state.message = action.payload;
    });

    // handle login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userAuth.loading = true;
      state.error = false;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.error = false;
      state.userAuth.loading = false;
      state.message = action.payload;
    });
    //
  },
});

export const { clearAuthState } = userSlide.actions;

export default userSlide.reducer;
