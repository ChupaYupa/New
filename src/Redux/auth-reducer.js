import {headerAPI} from "../components/API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
   // isFeaching: true
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }


        default:
            return state;
    }

}
export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email,
        login, isAuth}})

export const getAuthUser = () => (dispatch) => {
   return  headerAPI.getLogin()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
               dispatch(setUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    // let action = stopSubmit("Login", {_error: "Email is Error"});
    // dispatch(action);
    headerAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
               dispatch(getAuthUser())
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("Login", {_error: messages}))
            }
        });
}
export const logout = () => (dispatch) => {
    headerAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserData (null, null, null, false))
            }
        });
}

export default authReducer;