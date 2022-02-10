import {
  LOGIN_USER,
  REGISTER_USER,
  SET_AUTH_USER,
  SET_USER,
  LOGOUT_USER
} from "../constants/users";

export const loginUser = ({ username, password, onSuccess }) => {
  return {
    type: LOGIN_USER,
    payload: { username, password, onSuccess }
  };
};

export const registerUser = ({ username, password, onSuccess }) => {
  return {
    type: REGISTER_USER,
    payload: { username, password, onSuccess }
  };
};

export const setUser = (token) => {
  return {
    type: SET_USER,
    payload: { token }
  };
};

export const setAuthUser = () => {
  return {
    type: SET_AUTH_USER
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER
  };
};