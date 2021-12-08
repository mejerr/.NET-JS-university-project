import {
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../constants/comments";

const initialState = {
  comments: {},
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ADD_COMMENT:
      const { commentId, comment } = payload;

      return {
        ...state,
        comments: {
          [commentId]: [
            ...(state.comments[commentId] ? state.comments[commentId] : Object.keys(state.comments)),
            {
              text: comment,
              textId: Object.keys(state.comments).length ? state?.comments[commentId]?.length: 0
            },
          ]
        }
      };

    case DELETE_COMMENT:
      const { id, textIdDelete } = payload;
      const updatedArray = state.comments[id].filter(
        ({ textId }) => textId !== textIdDelete
      );

      return {
        ...state,
        comments: {
          [id]: updatedArray
        }
      };
    default:
      return state;
  }
};

export default reducer;
