import { configureStore } from "@reduxjs/toolkit";

import userSlide from "../slices/userSlice";
import productSlide from "../slices/productSlice";

const store = configureStore({
  reducer: {
    users: userSlide,
    products: productSlide,
  },
});

export default store;
