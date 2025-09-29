import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      // here we cannot apply api
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { payload } = userSlice.actions;
