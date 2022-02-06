import {
  ADD_IMAGE,
  imagesArray,
  SET_IMAGES
} from "../constants/images";

const initialState = {
  images: []
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_IMAGES:
      const { imagesIds } = payload;

      return {
        ...state,
        images: imagesIds
      };
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
