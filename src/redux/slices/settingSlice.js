import { createSlice } from "@reduxjs/toolkit";
// import { registerUserAction, loginUserAction } from "../actions/userAction";

const initialState = {
  error: false,
  loading: false,
};

const settingSlide = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle register
    // builder.addCase(registerUserAction.pending, (state) => {
    //   state.userAuth.loading = true;
    //   state.error = false;
    // });
    // builder.addCase(registerUserAction.fulfilled, (state, action) => {
    //   state.userAuth.loading = false;
    //   state.userAuth.userInfo = action.payload;
    //   state.message = "User registered successfully!";
    // });
    // builder.addCase(registerUserAction.rejected, (state, action) => {
    //   state.userAuth.loading = false;
    //   state.error = true;
    //   state.message = action.payload;
    // });
  },
});

export default settingSlide.reducer;
