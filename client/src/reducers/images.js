import {
  ADD_IMAGE,
  imagesArray
} from "../constants/images";

const initialState = {
  images: imagesArray
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ADD_IMAGE:
      const { image } = payload;

      return {
        ...state,
        images: [...state.images, image]
      };
    default:
      return state;
  }
};

export default reducer;
