import {
  INIT_COMMENTS,
  SET_COMMENTS,
  ADD_COMMENT,
  SAVE_ADD_COMMENT,
  DELETE_COMMENT,
} from "../constants/comments";

export const initComments = () => {
  return {
    type: INIT_COMMENTS
  };
};

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: { comments }
  };
};

export const addComment = (commentId, comment) => {
  return {
    type: ADD_COMMENT,
    payload: { commentId, comment }
  };
};

export const saveComment = (commentData) => {
  return {
    type: SAVE_ADD_COMMENT,
    payload: { commentData },
  };
};

export const deleteComment = (commentId, textId) => {
  return {
    type: DELETE_COMMENT,
    payload: { id: commentId, textIdDelete: textId }
  };
};

