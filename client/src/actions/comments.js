import {
  ADD_COMMENT,
  DELETE_COMMENT
} from "../constants/comments";


export const addComment = (commentId, comment) => {
  return {
    type: ADD_COMMENT,
    payload: { commentId, comment }
  };
};

export const deleteComment = (commentId, textId) => {
  return {
    type: DELETE_COMMENT,
    payload: { id: commentId, textIdDelete: textId }
  };
};

