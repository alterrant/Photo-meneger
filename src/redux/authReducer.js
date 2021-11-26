import {logOutRequest, signIn, signUpRequest} from "../firebase/auth";
import {stopSubmit, SubmissionError} from "redux-form";

const SET_AUTH_SUCCESS = "PHOTO_MANAGER/AUTH_REDUCER/SET_AUTH_SUCCESS";
const SET_AUTH_OUT = "PHOTO_MANAGER/AUTH_REDUCER/SET_AUTH_OUT";
const SET_AUTH_PROFILE = "PHOTO_MANAGER/AUTH_REDUCER/SET_AUTH_PROFILE";


const initState = {
  isAuth: false,
  authUserProfile: {
    displayName: null,
    email: null,
    photoURL: null,
    emailVerified: null
  }
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS:
      return {...state, isAuth: true}
    case SET_AUTH_PROFILE:
      return {...state, authUserProfile: {...state.authUserProfile, ...action.authProfile}}
    case SET_AUTH_OUT:
      return {
        ...state,
        isAuth: false,
        authUserProfile: {
          displayName: null,
          email: null,
          photoURL: null,
          emailVerified: null
        }
      }
    default:
      return state
  }
}

export default authReducer;

export const setAuthSuccess = () => ({type: SET_AUTH_SUCCESS});
export const setAuthOut = () => ({type: SET_AUTH_OUT});
export const setAuthProfile = (authProfile) => ({type: SET_AUTH_PROFILE, authProfile});

export const logIn = ({email, password}) => async (dispatch) => {
  const signedUser = await signIn({email, password});
  signedUser ?
      dispatch(setAuthUser(signedUser))
      :
      dispatch(stopSubmit("signInForm", {_error: "Invalid email or password", email: " ", password: " "}));
}

export const signUp = ({email, password}) => async () => {
  const signedUp = await signUpRequest({email, password});
  if (signedUp.error) {
    if (signedUp.error.errorCode === "auth/email-already-in-use") throw new SubmissionError({_error: "email already exist", email: " ", password: " "});
    if (signedUp.error.errorCode === "auth/invalid-email") throw new SubmissionError({_error: "invalid email", email: " ", password: " "});
    throw new SubmissionError({_error: signedUp.error.errorCode, email: " ", password: " "})
  }
}

export const logOut = () => (dispatch) => {
  logOutRequest();
  dispatch(setAuthOut());
}

export const setAuthUser = (authProfile) => (dispatch) => {
  dispatch(setAuthSuccess());
  dispatch(setAuthProfile(authProfile));
}