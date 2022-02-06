import { all, takeEvery } from 'redux-saga/effects';
import { ADD_COMMENT, INIT_COMMENTS } from '../constants/comments';
import { onAddComment, onInitComments } from './comments';
import { INIT_IMAGES } from '../constants/images';
import { onInitImages } from './images';

// import {
//     onRegisterUser,
//     onLoginUser,
//     onAuthCheckState
// } from './auth';

// export function* watchComments() {
//     yield all([
//         commentsSaga
//     ]);
// }

export function* watchComments() {
  yield all([
      takeEvery(INIT_COMMENTS, onInitComments),
      takeEvery(ADD_COMMENT, onAddComment)
  ]);
}

export function* watchImages() {
  yield all([
      takeEvery(INIT_IMAGES, onInitImages)
  ]);
}

// export function* watchAuth() {
//     yield all([takeEvery(actionTypesAuth.REGISTER, onRegisterUser)]);
//     yield all([takeEvery(actionTypesAuth.AUTH_LOGIN, onLoginUser)]);
//     yield all([takeEvery(actionTypesAuth.AUTH_CHECK, onAuthCheckState)]);
// }
