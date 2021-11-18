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

export const setAuthUser = (authProfile) => (dispatch) => {
  dispatch(setAuthSuccess());
  dispatch(setAuthProfile(authProfile));
}