import {all, fork} from "redux-saga/effects";
import * as LoginSaga from "../Pages/Login/Saga";

export default function* rootSaga(){
    yield all([
        ...Object.values(LoginSaga),
    ].map(fork));
}