
import { call, put } from "redux-saga/effects";
import { setImages } from "../actions/images";
import { initImages } from "../services/images-service";

export function* onInitImages() {

  try {
    const response = yield call(initImages);

    yield put(setImages(response.data));
  } catch (err) {
    console.log(err);
  }
}
