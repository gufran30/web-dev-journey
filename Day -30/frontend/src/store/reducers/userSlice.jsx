import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: [],
};
// console.log(initialState.userValue)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.userValue = action.payload;
    },
    removeUser: (state, action) => {
      state.userValue = null;
    },
  },
});

export default userSlice.reducer;
export const { loadUser, removeUser } = userSlice.actions;
