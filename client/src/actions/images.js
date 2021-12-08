import {
  ADD_IMAGE
} from "../constants/images";


export const addImage = (images) => {
  return {
    type: ADD_IMAGE,
    payload: { images }
  };
};
