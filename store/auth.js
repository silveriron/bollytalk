import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: "",
  nickName: "",
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
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
