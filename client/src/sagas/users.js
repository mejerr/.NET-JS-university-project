import { call, put } from "redux-saga/effects";
import { registrationUser, loginUser } from '../services/users-service';
import { logout, setUser } from '../actions/users';
import jwt from 'jwt-decode';

export function* onRegisterUser({ payload = {} }) {
  const { username, password, onSuccess } = payload;

  try {
    yield call(registrationUser, username, password);
    onSuccess();
  } catch (err) {
    console.log(err);
  }
}

export function* onLoginUser({ payload = {} }) {
  const { username, password, onSuccess } = payload;

  try {
    const response = yield call(loginUser, username, password);
    const token = jwt(response.data);
    localStorage.setItem('token', JSON.stringify(token));

    yield put(setUser(token));
    onSuccess();
  } catch (err) {
    console.log(err);
  }
}

export function* onAuthCheckState() {
  const storageToken = JSON.parse(localStorage.getItem("token"));
  if (!storageToken) {
      yield put(logout());
  } else {
      yield put(setUser(storageToken));
    }
}