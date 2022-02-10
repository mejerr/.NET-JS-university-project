import { all, takeEvery } from 'redux-saga/effects';
import { ADD_COMMENT, DELETE_COMMENT, INIT_COMMENTS } from '../constants/comments';
import { LOGIN_USER, REGISTER_USER, SET_AUTH_USER } from '../constants/users';
import { onAddComment, onDeleteSingleComment, onInitComments } from './comments';
import { onRegisterUser, onLoginUser, onAuthCheckState } from './users';

export function* watchComments() {
  yield all([
      takeEvery(INIT_COMMENTS, onInitComments),
      takeEvery(ADD_COMMENT, onAddComment),
      takeEvery(DELETE_COMMENT, onDeleteSingleComment)
  ]);
}
export function* watchUsers() {
  yield all([
      takeEvery(REGISTER_USER, onRegisterUser),
      takeEvery(LOGIN_USER, onLoginUser),
      takeEvery(SET_AUTH_USER, onAuthCheckState)
  ]);
}
