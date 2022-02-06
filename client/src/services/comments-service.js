import axios from "../axios-forum";

export const initComments = (imageId) => {
  return axios.get(`/Comments/?imageId=${imageId}`);
};

// export const deleteComment = (commentId, token) => {
//   return axios.delete(`/comments/${commentId}`);
// };

export const addComment = (imageId, text) => {
  console.log({ imageId }, '123wasdsa')
  return axios.post(`/Comments`, { imageId, text });
};
