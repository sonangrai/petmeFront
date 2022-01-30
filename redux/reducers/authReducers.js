import { createReducer } from "@reduxjs/toolkit";
import {
  gettingProfile,
  gettingProfileError,
  gettingProfileSuccess,
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

  profile: {},
  gettingProfile: false,
  gettingProfileSuccess: false,
  gettingProfileError: {},
};

const authReducers = createReducer(initialState, {
  //Login
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

  //Is logged
  [islogged]: (state, action) => {
    state.isAuthenticated = true;
    state.token = action.payload.access_token;
  },

  //Profile
  [gettingProfile]: (state) => {
    state.gettingProfile = true;
  },
  [gettingProfileSuccess]: (state, action) => {
    state.gettingProfile = false;
    state.gettingProfileSuccess = true;
    state.profile = action.payload.data.data;
  },
  [gettingProfileError]: (state, action) => {
    state.gettingProfile = false;
    state.gettingProfileError = action.payload.data;
  },
});

export default authReducers;
