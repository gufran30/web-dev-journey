import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValue: [],
};
// console.log(initialState.cartValue)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.cartValue = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { loadCart } = cartSlice.actions;
