import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  authLogin: "signInEmailPass"
}

const loginListSlice = createSlice({
  name: 'loginList',
  initialState,
  reducers: {
    setEmailPassLogin(state, action) {
      state.authLogin = "signInEmailPass";
    },
    setSignUp(state, action) {
      state.authLogin = "signUp";
    }
  }
})

export const {setEmailPassLogin, setSignUp} = loginListSlice.actions;

export default loginListSlice.reducer;