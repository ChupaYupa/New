

import {getAuthUser} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';



let initialState = {
    initialIzed: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialIzed: true
            }


        default:
            return state;
    }

}
export const setInitialized = () => ({type: SET_INITIALIZED})

export const getInitialize = () => (dispatch) => {
    let promise = dispatch(getAuthUser());
    Promise.all([promise])
        .then(()=>{
        dispatch(setInitialized());
    })
}

export default appReducer;