import { createAction } from "@reduxjs/toolkit";

//Login Actions
export const login = createAction("LOGIN/REQ");
export const loginSuccess = createAction("LOGIN_SUCCESS/RES");
export const loginFailed = createAction("LOGIN_FAILED/RES");

//Is logged check actions
export const islogged = createAction("LOGGED");

//Get profile actions
export const gettingProfile = createAction("GET_PROIFLE/REQ");
export const gettingProfileSuccess = createAction("GET_PROGILE_SUCCESS/RES");
export const gettingProfileError = createAction("GET_PROGILE_FAIL/RES");
