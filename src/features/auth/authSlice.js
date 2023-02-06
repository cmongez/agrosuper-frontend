import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: 'devsafio',
    pass: 'tokentokentokenABC',
    isLogin: localStorage.getItem('isLogin') ? JSON.parse(localStorage.getItem('isLogin')) : false,
  },
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
      localStorage.setItem('isLogin', JSON.stringify(state.isLogin));
    },
    setLogout: (state) => {
      state.isLogin = false;
      localStorage.setItem('isLogin', JSON.stringify(state.isLogin));
    },
  },
});
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
