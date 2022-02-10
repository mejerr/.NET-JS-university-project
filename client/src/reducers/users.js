import { LOGOUT_USER, SET_USER } from "../constants/users";

const initialState = {
  username: '',
  isAuthenticated: false
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_USER:
      const { token } = payload;
      const username = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

      return {
        ...state,
        username: username,
        isAuthenticated: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default reducer;
