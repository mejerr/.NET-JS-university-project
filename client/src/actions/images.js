import {
  INIT_IMAGES,
  ADD_IMAGE,
  SET_IMAGES
} from "../constants/images";


export const addImage = (images) => {
  return {
    type: ADD_IMAGE,
    payload: { images }
  };
};

export const initImages = () => {
  return {
    type: INIT_IMAGES
  };
};

export const setImages = (imagesIds) => {
  return {
    type: SET_IMAGES,
    payload: { imagesIds }
  };
};
