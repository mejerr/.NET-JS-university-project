import { call, put } from "redux-saga/effects";
import { setComments } from "../actions/comments";
import { addComment, initComments, deleteComment } from "../services/comments-service";


export function* onInitComments({ payload = {} }) {
  const { imageId } = payload;

  try {
    const response = yield call(initComments, +imageId);

    yield put(setComments(response.data, imageId));
  } catch (err) {
    console.log(err);
  }
}

export function* onAddComment({ payload = {} }) {
  const { imgId, commentText } = payload;

  try {
    yield call(addComment, +imgId, commentText);
    const response = yield call(initComments, +imgId);

    yield put(setComments(response.data, imgId));
  } catch (err) {
    console.log(err);
  }
}

export function* onDeleteSingleComment({ payload = {} }) {
  const { textIdDelete } = payload;

  try {
    yield call(deleteComment, textIdDelete);
  } catch (err) {
    console.log(err);
  }
}