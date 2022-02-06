import axios from "../axios-forum";

export const initImages = () => {
  return axios.get(`/Images`);
};
