import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginApi } from "../api/auth";
import {
  login,
  loginFailed,
  loginSuccess,
} from "../reducers/actions/authActions";

/**
 * Login Saga
 */
function* loginSaga(action) {
  try {
    let res = yield call(loginApi, action.payload);
    yield put(loginSuccess(res));
  } catch (error) {
    yield put(loginFailed(error.response));
  }
}

export default function* authSagas() {
  yield all([takeLatest(login, loginSaga)]);
}
