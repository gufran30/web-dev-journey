import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productValue: [],
};
// console.log(initialState.productValue)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProduct: (state, action) => {
      state.productValue = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { loadProduct } = productSlice.actions;
