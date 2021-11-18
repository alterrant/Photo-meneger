import {getAuth} from "firebase/auth";
import {authUpdater, authUserProfile} from "../firebase/auth";
import {setAuthProfile, setAuthSuccess} from "./authReducer";

const SET_INITIALIZED_SUCCESS = "PHOTO_MANAGER/INITIALISE_APP/SET_INITIALIZED_SUCCESS";
const UPDATE_STATUS_AUTHORISED_USER = "PHOTO_MANAGER/INITIALISE_APP/UPDATE_STATUS_AUTHORISED_USER";
const GET_AUTH = "PHOTO_MANAGER/INITIALISE_APP/GET_AUTH";

const initState = {
  isInitialized: false,
  auth: null
}

const initialiseApp = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {...state, isInitialized: true}
    case UPDATE_STATUS_AUTHORISED_USER:
      return {...state, userId: action.userId}
    case GET_AUTH:
      return {...state, auth: {...action.auth}}
    default:
      return state
  }
}

export default initialiseApp;

export const getAuthUser = (auth) => ({type: GET_AUTH, auth})
export const setInitializeSuccess = () => ({type: SET_INITIALIZED_SUCCESS});
export const initialize = () => async (dispatch) => {

  //getAuthUser можно убрать, но думаю, что пригодится в будущем
  const auth = getAuth();
  dispatch(getAuthUser(auth));

  const currentUser = await authUpdater();

  if (currentUser) {
    dispatch(setAuthProfile(authUserProfile(currentUser.auth)));
    dispatch(setAuthSuccess())
  }
  dispatch(setInitializeSuccess());
}