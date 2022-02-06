import {
  INIT_COMMENTS,
  SET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../constants/comments";

export const initComments = (imageId) => {
  return {
    type: INIT_COMMENTS,
    payload: { imageId }
  };
};

export const setComments = (comments, imageId) => {
  return {
    type: SET_COMMENTS,
    payload: { comments, imageId }
  };
};

export const addComment = (imgId, commentText) => {
  return {
    type: ADD_COMMENT,
    payload: { imgId, commentText }
  };
};

export const deleteComment = (commentId, textId) => {
  return {
    type: DELETE_COMMENT,
    payload: { id: commentId, textIdDelete: textId }
  };
};

