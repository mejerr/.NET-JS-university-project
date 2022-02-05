import { call, put } from "redux-saga/effects";
import { saveComment, setComments } from "../actions/comments";
import { addComment, initComments } from "../services/comments-service";


export function* onInitComments(action) {
  try {
    const response = yield call(initComments);
    // console.log(response, 123213);

    yield put(setComments(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* onAddComment({ payload }) {
  const { commentId, comment } = payload;
  console.log('payload', payload, 123213);
  try {
    const response = yield call(addComment,
      commentId,
      comment
    );
    console.log('response', response);

    yield put(saveComment(response.data));
  } catch (err) {
    console.log(err);
  }
}

// export function* onDeleteSingleComment(action) {
//   try {
//     const newToken = localStorage.getItem("token");
//     const response = yield call(commentService.deleteComment,
//       action.id,
//       newToken
//     );
//     yield put(commentActions.saveDeleteComment(response.data));
//   } catch (err) {
//     console.log(err);
//   }
// }


// eslint-disable-next-line import/no-anonymous-default-export
// export default [
//   // takeEvery(SET_COMMENTS, onInitComments),
//   takeEvery(ADD_COMMENT, onAddComment)
//   // takeEvery(DELETE_COMMENT, onDeleteSingleComment)
// ]