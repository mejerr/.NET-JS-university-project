import axios from "../axios-forum";

export const initComments = () => {
  return axios.get(`/Comments`);
};

// export const deleteComment = (commentId, token) => {
//   return axios.delete(`/comments/${commentId}`);
// };

export const addComment = (Id, Text) => {
  return axios.post(`/Comments`, Id, Text);
};
