import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILED } from "./Constants";

import { loginInt, loginScucces, loginFailed } from "./Action";

import environment from "../../environment";

function* loginAuthentication(action) {
  /* username: 'kminchelle',

    password: '0lelplR', */

  const reqUrl = `${environment.LOGIN}?email=${action.data.username}&password=12345`;
  const response = yield fetch(reqUrl, {
    method: "POST",
  });

  console.log(response, "Response");

  try {
    const responseData = yield response.json();

    console.log(responseData, "loginapi");

    if (responseData.code === "200") {
      // sessionStorage.setItem("Token", responseData.token);
      yield put(loginScucces("Login Successfully!!"));
    } else {
      yield put(loginFailed(responseData.message));
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}

export function* adminLoginSaga() {
  yield takeEvery(LOGIN_INIT, loginAuthentication);
}
