import axios from "../axios-forum";

export const registrationUser = (username, password) => {
  return axios.post(`/Home`, { username,  password });
};

export const loginUser = (username, password) => {
  return axios.post(`/Home/login`, { username, password });
};