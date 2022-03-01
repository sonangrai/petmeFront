import { createAction } from "@reduxjs/toolkit";

//Login Actions
export const login = createAction("LOGIN/REQ");
export const loginSuccess = createAction<object>("LOGIN_SUCCESS/RES");
export const loginFailed = createAction<object>("LOGIN_FAILED/RES");

//Is logged check actions
export const islogged = createAction<object>("LOGGED");

//Get profile actions
export const gettingProfile = createAction("GET_PROIFLE/REQ");
export const gettingProfileSuccess = createAction<object>(
  "GET_PROFILE_SUCCESS/RES"
);
export const gettingProfileError = createAction<object>("GET_PROFILE_FAIL/RES");

//Dp update
export const updateDP = createAction<object>("UPDATE_DP/STATE");
