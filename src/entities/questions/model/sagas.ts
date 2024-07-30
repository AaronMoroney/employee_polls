import {
    takeLatest,
    call,
    put,
} from 'redux-saga/effects';

import * as A from './actions';
import { getQuestionsReq } from '../api/api';

function* getQuestionsSaga() {
    const apiCall = getQuestionsReq();
    const response: ReturnType<typeof apiCall> = yield call(apiCall);

    // write error response && type correctly the ApiCall
    if (isErrorResponse) {
        yield put(displayError(response));
        yield put(A.fetchPostsError);

        return;
    }

    yield put (A.fetchPostsSuccess(response));
}

function* questionsWatcher() {
    yield takeLatest(A.fetchPostsRequest, getQuestionsSaga)
}

export default [questionsWatcher];