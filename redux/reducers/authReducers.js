import { createReducer } from "@reduxjs/toolkit";
import { login, loginFailed, loginSuccess } from "./actions/authActions";

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
  },
  [loginFailed]: (state, action) => {
    state.authenticating = false;
    state.authenticationError = action.payload.data;
  },
});

export default authReducers;
