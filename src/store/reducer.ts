import { createSlice } from '@reduxjs/toolkit';

const access__token = JSON.parse(localStorage.getItem('accessToken') || '{}');
const user_id = JSON.parse(localStorage.getItem('userId') || '{}');
const initialState = {
  user: { token: Object.values(access__token).length ? access__token : null },
  userId: { id: Object.values(user_id).length ? user_id : null },
  language: 'uz',
};
export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.user.token = null;
      localStorage.removeItem('user');
    },
    signIn: (state, action) => {
      state.user.token = action.payload.token;
      state.userId.id = action.payload.id;
    },
    language: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { logOut, signIn, language } = authReducer.actions;
export default authReducer.reducer;
