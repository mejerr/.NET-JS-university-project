import axios from "../axios-forum";

export const initComments = (imageId) => {
  return axios.get(`/Comments/?imageId=${imageId}`);
};

export const addComment = (imageId, text) => {
  return axios.post(`/Comments`, { imageId, text });
};

export const deleteComment = (id) => {
  return axios.delete(`/Comments/${id}`);
};
