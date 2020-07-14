import { headerAPI, securityAPI } from "../components/API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL";

type InitialStateTypeOf = typeof initialState;

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, //if null, then captcha is not required
  // isFeaching: true
};



const authReducer = (state = initialState, action:ActionType):InitialStateTypeOf => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL:
      debugger
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

//Payload
type setPayloadUser = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}
type setLayloadCaptcha = {
  captchaUrl: string
}
type GetUserDataAC = {
  type: typeof SET_USER_DATA,
  payload: setPayloadUser
}
type GetCaptchaUrlAC = {
  type: typeof GET_CAPTCHA_URL,
  payload: setLayloadCaptcha
}
// ACTION ALL
type ActionType = GetUserDataAC | GetCaptchaUrlAC
//AC
export const setUserData = (id:number|null, email:string| null, login:string| null, isAuth:boolean):GetUserDataAC => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

debugger;
export const getCaptchaUrlSuccess = (captchaUrl: string):GetCaptchaUrlAC => ({
  type: GET_CAPTCHA_URL,
  payload: { captchaUrl },
});

//      -----------THUNK---------------
export const getAuthUser = () => async (dispatch:Function) => {
  let response = await headerAPI.getLogin();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;

    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe = false,
  captchaUrl: boolean
) => async (dispatch:Function) => {
  let response = await headerAPI.login(email, password, rememberMe, captchaUrl);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUser());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
      debugger;
    }
    let messages =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("Login", { _error: messages }));
  }
};
export const logout = () => async (dispatch:Function) => {
  let response = await headerAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch:Function) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
