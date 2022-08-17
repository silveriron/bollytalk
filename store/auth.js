import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userName: "",
  token: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.userName = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
