import { configureStore } from "@reduxjs/toolkit";

import userSlide from "../slices/userSlice";
import productSlide from "../slices/productSlice";
import settingSlide from "../slices/settingSlice";

const store = configureStore({
  reducer: {
    users: userSlide,
    products: productSlide,
    settings: settingSlide,
  },
});

export default store;
