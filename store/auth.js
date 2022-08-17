import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: "",
  userName: "",
  token: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp(state, action) {
      state.email = action.payload;
    },
    login(state, action) {
      state.isLogin = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
