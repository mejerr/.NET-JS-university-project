import {
  ADD_IMAGE
} from "../constants/images";

export const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    payload: { image }
  };
};