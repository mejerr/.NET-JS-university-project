import { call, put } from "redux-saga/effects";
import { setComments } from "../actions/comments";
import { addComment, initComments } from "../services/comments-service";


export function* onInitComments({ payload = {} }) {
  const { imageId } = payload;

  try {
    const response = yield call(initComments, +imageId);
    console.log(response, 'co=mments', 54564);

    yield put(setComments(response.data, imageId));
  } catch (err) {
    console.log(err);
  }
}

export function* onAddComment({ payload = {} }) {
  const { imgId, commentText } = payload;

  try {
    yield call(addComment, +imgId, commentText);
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