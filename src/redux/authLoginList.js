const SET_EMAIL_PASS_LOGIN = "PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_EMAIL_PASS_LOGIN";
const SET_SIGN_UP = "PHOTO_MANAGER/AUTH_LOGIN_LIST/SET_SIGN_UP";

export const initialState = {
  authLogin: "signInEmailPass"
}

const reducerLoginList = (state, action) => {
  switch (action.type) {
    case SET_EMAIL_PASS_LOGIN:
      return {...state, authLogin: "signInEmailPass"}
    case SET_SIGN_UP:
      return {...state, authLogin: "signUp"}
    default:
      return state;
  }
}

export default reducerLoginList;

export const setEmailPassLogin = () => ({type: SET_EMAIL_PASS_LOGIN});
export const setSignUp = () => ({type: SET_SIGN_UP});