import { createReducer } from "@reduxjs/toolkit";
import {
  islogged,
  login,
  loginFailed,
  loginSuccess,
} from "./actions/authActions";

const initialState = {
  isAuthenticated: false,
  token: null,
  authenticating: false,
  authenticationError: {},
};

const authReducers = createReducer(initialState, {
  [login]: (state) => {
    state.authenticating = true;
  },
  [loginSuccess]: (state, action) => {
    state.authenticating = false;
    state.isAuthenticated = true;
    state.token = action.payload.data.data.access_token;
    localStorage.setItem("petAuth", JSON.stringify(action.payload.data.data));
  },
  [loginFailed]: (state, action) => {
    state.authenticating = false;
    state.authenticationError = action.payload.data;
  },

  [islogged]: (state, action) => {
    state.isAuthenticated = true;
    state.token = action.payload.access_token;
  },
});

export default authReducers;
