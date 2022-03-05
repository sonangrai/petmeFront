import { createReducer } from "@reduxjs/toolkit";
import {
  gettingProfile,
  gettingProfileError,
  gettingProfileSuccess,
  islogged,
  login,
  loginFailed,
  loginSuccess,
  updateDP,
} from "./actions/authActions";
import { addprofile } from "./actions/profileActions";

const initialState: Iauth = {
  isAuthenticated: false,
  token: null,
  authenticating: false,
  authenticationError: {},

  user: {} as Iuser,

  profile: {} as Iprofile,
  gettingProfile: false,
  gettingProfileSuccess: false,
  gettingProfileError: {},
};

const authReducers = createReducer(initialState, {
  //Login
  [login.type]: (state) => {
    state.authenticating = true;
  },
  [loginSuccess.type]: (state, action) => {
    state.authenticating = false;
    state.isAuthenticated = true;
    state.token = action.payload.data.data.access_token;
    state.user = action.payload.data.data.user;
    localStorage.setItem("petAuth", JSON.stringify(action.payload.data.data));
  },
  [loginFailed.type]: (state, action) => {
    state.authenticating = false;
    state.authenticationError = action.payload.data;
  },

  //Is logged
  [islogged.type]: (state, action) => {
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.token = action.payload.access_token;
  },

  //Profile
  [gettingProfile.type]: (state) => {
    state.gettingProfile = true;
  },
  [gettingProfileSuccess.type]: (state, action) => {
    state.gettingProfile = false;
    state.gettingProfileSuccess = true;
    state.profile = action.payload.data.data;
  },
  [gettingProfileError.type]: (state, action) => {
    state.gettingProfile = false;
    state.gettingProfileError = action.payload.data;
  },

  //DP
  [updateDP.type]: (state, action) => {
    state.profile.avatar = action.payload.data;
  },

  //Adding Profile
  [addprofile.type]: (state, action) => {
    state.profile = action.payload.data;
  },
});

export default authReducers;
