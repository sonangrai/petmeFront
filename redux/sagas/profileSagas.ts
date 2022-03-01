import { all, takeLatest, put, call } from "@redux-saga/core/effects";
import { getProfileApi } from "../api/profile";
import {
  gettingProfile,
  gettingProfileError,
  gettingProfileSuccess,
} from "../reducers/actions/authActions";

/**
 * Get profile
 */
function* getProfileSaga() {
  try {
    let res = yield call(getProfileApi);
    yield put(gettingProfileSuccess(res));
  } catch (error) {
    yield put(gettingProfileError(error.response));
  }
}

export default function* profileSagas() {
  yield all([takeLatest(gettingProfile, getProfileSaga)]);
}
