import { all, takeEvery } from 'redux-saga/effects';
import { ADD_COMMENT, DELETE_COMMENT, INIT_COMMENTS } from '../constants/comments';
import { onAddComment, onDeleteSingleComment, onInitComments } from './comments';

// import {
//     onRegisterUser,
//     onLoginUser,
//     onAuthCheckState
// } from './auth';

export function* watchComments() {
  yield all([
      takeEvery(INIT_COMMENTS, onInitComments),
      takeEvery(ADD_COMMENT, onAddComment),
      takeEvery(DELETE_COMMENT, onDeleteSingleComment)
  ]);
}

// export function* watchAuth() {
//     yield all([takeEvery(actionTypesAuth.REGISTER, onRegisterUser)]);
//     yield all([takeEvery(actionTypesAuth.AUTH_LOGIN, onLoginUser)]);
//     yield all([takeEvery(actionTypesAuth.AUTH_CHECK, onAuthCheckState)]);
// }
