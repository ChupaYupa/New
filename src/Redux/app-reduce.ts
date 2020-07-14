import {getAuthUser} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

type InitialStateType = {
    initialIzed: boolean
}


let initialState = {
    initialIzed: false
}

const appReducer = (state= initialState, action: GetInitialazed) => {
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

type GetInitialazed = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = ():GetInitialazed => {
    return {
        type: SET_INITIALIZED
    }
};


//инициализация

export const getInitialize = () => (dispatch:Function) => {
    let promise = dispatch(getAuthUser());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        })
}

export default appReducer;