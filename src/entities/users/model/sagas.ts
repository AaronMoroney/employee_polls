import { takeLatest, put, call } from "redux-saga/effects";

import * as A from "./actions";
import { getUsersReq } from "../api/api";
import { fetchPostsRequest } from "entities/questions/model/actions";

function* getUsersSaga() {
  const apiCall = getUsersReq();
  const response: ReturnType<typeof apiCall> = yield call(apiCall);

  if (isErrorResponse) {
    yield put(displayError(response));
    yield put(A.fetchUserError);

    return;
  }

  yield put(fetchPostsRequest(response));
}

function* usersWatcher() {
  takeLatest(A.fetchUserRequest, getUsersSaga);
}

export default [usersWatcher];
