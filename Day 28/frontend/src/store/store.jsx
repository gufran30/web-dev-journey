import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/reducers/userSlice";
import productSlice from "../store/reducers/productSlice";
import cartSlice from "../store/reducers/cartSlice";
export const store = configureStore({
  reducer: {
    userreducer: userSlice,
    productreducer: productSlice,
    cartreducer: cartSlice,
  },
});
