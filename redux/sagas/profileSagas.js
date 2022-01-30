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
function* getProfileSaga(action) {
  try {
    let res = yield call(getProfileApi, action.payload);
    console.log(res);
    yield put(gettingProfileSuccess(res));
  } catch (error) {
    console.log(error);
    yield put(gettingProfileError(error));
  }
}

export default function* profileSagas() {
  yield all([takeLatest(gettingProfile, getProfileSaga)]);
}
