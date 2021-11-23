const SET_GITHAB_LOGIN = "PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_GITHAB_LOGIN";
const SET_GOOGLE_LOGIN = "PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_GOOGLE_LOGIN";
const SET_EMAIL_PASS_LOGIN = "PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_EMAIL_PASS_LOGIN";
const SET_SIGN_UP = "PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_SIGN_UP";

export const initialState = {
  authLogin: "signInEmailPass"
}

const reducerLoginList = (state, action) => {
  switch (action.type) {
    case SET_GITHAB_LOGIN:
      return {...state, authLogin: "signInGitHub"}
    case SET_GOOGLE_LOGIN:
      return {...state, authLogin: "signInGoogle"}
    case SET_EMAIL_PASS_LOGIN:
      return {...state, authLogin: "signInEmailPass"}
    case SET_SIGN_UP:
      debugger
      return {...state, authLogin: "signUp"}
    default:
      return state;
  }
}

export default reducerLoginList;

export const setGitHubLogin = () => ({type: SET_GITHAB_LOGIN});
export const setGoogleLogin = () => ({type: SET_GOOGLE_LOGIN});
export const setEmailPassLogin = () => ({type: SET_EMAIL_PASS_LOGIN});
export const setSignUp = () => ({type: SET_SIGN_UP});