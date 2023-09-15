import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "./Constants";

export const loginInt = (data) => {
    return{
        type: LOGIN_INIT,
        data
    }
}

export const loginScucces = (message) => {
    return{
        type: LOGIN_SUCCESS,
        message
    }
}

export const loginFailed = (message) => {
    return{
        type: LOGIN_FAILED,
        message
    }
}