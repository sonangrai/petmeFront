import { all, fork } from "redux-saga/effects";
import authSagas from "./authSagas";
import profileSagas from "./profileSagas";

export default function* rootSaga() {
  yield all([fork(authSagas), fork(profileSagas)]);
}
