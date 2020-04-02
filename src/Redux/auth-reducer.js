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
                ...action.data, isAuth: true
            }


        default:
            return state;
    }

}
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const getAuthUser = () => (dispatch) => {
    headerAPI.getLogin()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
               dispatch(setUserData(id, email, login));
            }
        });
}

export default authReducer;