import { createSlice } from "@reduxjs/toolkit";
// import { registerCreateThunk } from "../actions/userAction";

const initialState = {
  error: false,
  loading: false,
  products: [],
  product: {},
};

const productSlide = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle register
    // builder.addCase(registerCreateThunk.pending, (state) => {});
    // builder.addCase(registerCreateThunk.fulfilled, (state) => {});
    // builder.addCase(registerCreateThunk.rejected, (state) => {});
    // handle login
    //
  },
});

// export const {} = userSlide.actions

export default productSlide.reducer;
