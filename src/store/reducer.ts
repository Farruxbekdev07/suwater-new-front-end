import { createSlice } from '@reduxjs/toolkit';

const access__token = JSON.parse(localStorage.getItem('accessToken') || '{}');
const initialState = {
  user: { token: Object.values(access__token).length ? access__token : null },
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
      state.user.token = action.payload;
    },
  },
});

export const { logOut, signIn } = authReducer.actions;
export default authReducer.reducer;
// let array = [1, 2, 3, 4, 5];
// const index = 2;
// const newValue = 10;
// array[index] = newValue;
// console.log(array);
