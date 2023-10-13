import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  active: "signin",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload.user;
    },
    login: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
    setActive: (state, action) => {
      state.active = action.payload.active;
    },
  },
});

export const getUserSlice = (state) => state.user.user;
export const activeStatus = (state) => state.user.active;

export const { login, logout, setActive, signup } = UserSlice.actions;

export default UserSlice.reducer;