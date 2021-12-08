import {
  ADD_IMAGE
} from "../constants/images";

const initialState = {
  images: [],
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ADD_IMAGE:
      const { images } = payload;

      return {
        ...state,
        images
      };
    default:
      return state;
  }
};

export default reducer;
