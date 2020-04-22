import {headerAPI} from "../components/API/api";

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
export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email,
        login, isAuth}})

export const getAuthUser = () => (dispatch) => {
    debugger
    headerAPI.getLogin()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data;
               dispatch(setUserData(userId, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    debugger
    headerAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
               dispatch(getAuthUser())
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