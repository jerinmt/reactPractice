import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || '',
  token: localStorage.getItem('token') || '',
  user: localStorage.getItem('username')
    ? { username: localStorage.getItem('username'), token: localStorage.getItem('token') }
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.user = { username: action.payload.username, token: action.payload.token };
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.username = '';
      state.token = '';
      state.user = null;
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
    setUserFromLocalStorage: (state) => {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      if (username && token) {
        state.user = { username, token };
      } else {
        state.user = null;
      }
    },
  },
});

export const { login, logout, setUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;