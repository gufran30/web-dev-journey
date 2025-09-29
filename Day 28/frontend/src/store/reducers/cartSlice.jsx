import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      // here we cannot apply api
      state.carts = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { payload } = cartSlice.actions;
