import {
  SET_COMMENTS,
  DELETE_COMMENT,
  ADD_COMMENT,
} from "../constants/comments";

const initialState = {
  comments: {},
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_COMMENTS:
      const { comments, imageId } = payload;

      return {
        ...state,
        comments: {
          ...state.comments,
        [imageId] : [
          ...comments
        ]
      }
      };
    case ADD_COMMENT:
      const { imgId, commentText  } = payload;

      return {
        ...state,
        comments: {
          ...state.comments,
          [imgId]: [
            ...(state?.comments[imgId] ? state.comments[imgId] : []),
            {
              id: state.comments[imgId] ? state.comments[imgId].length + 2: 0,
              text: commentText,
              imageId: +imgId
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
          ...state.comments,
          [id]: updatedArray
        }
      };
    default:
      return state;
  }
};

export default reducer;
