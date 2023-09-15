import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "./Constants"

const initialState =  {
    userLoginDetail: [{username: "", password:""}],
    userLoginSuccessMessage: "",
    userLoginFailedMessage: "",
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_INIT:
            return{
                ...state,
                userLoginDetail: {username: action.data.username, password: action.data.password}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                userLoginSuccessMessage: action.message,
            }
        case LOGIN_FAILED:
            return{
                ...state,
                userLoginFailedMessage: action.message
            } 
        default:
            return state;           
    }
}