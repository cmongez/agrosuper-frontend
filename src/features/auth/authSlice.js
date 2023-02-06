import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: 'devsafio',
    pass: '',
    isLogin: localStorage.getItem('isLogin') ? JSON.parse(localStorage.getItem('isLogin')) : false,
  },
  reducers: {
    setLogin: (state) => {
      !state.isLogin;
      localStorage.setItem('isLogin', JSON.stringify(state.isLogin));
    },
    setLogout: (state) => {
      !state.isLogin;
      localStorage.setItem('isLogin', JSON.stringify(state.isLogin));
    },
  },
});
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
