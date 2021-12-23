import {getAuth, onAuthStateChanged} from "firebase/auth";
import {authUpdater, authUserProfile} from "../firebase/auth";
import {setAuthProfile, setAuthSuccess} from "./authReducer";

const SET_INITIALIZED_SUCCESS = "PHOTO_MANAGER/INITIALISE_APP/SET_INITIALIZED_SUCCESS";
const UPDATE_STATUS_AUTHORISED_USER = "PHOTO_MANAGER/INITIALISE_APP/UPDATE_STATUS_AUTHORISED_USER";

const initState = {
  isFetchingAuthState: true,
  isInitialized: false,
  auth: null
}

const initialiseApp = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {...state, isInitialized: true}
    case UPDATE_STATUS_AUTHORISED_USER:
      return {...state, userId: action.userId}
    default:
      return state
  }
}

export default initialiseApp;

export const setInitializeSuccess = () => ({type: SET_INITIALIZED_SUCCESS});
export const initialize = (currentUser) => (dispatch) => {

  if (currentUser) {
    dispatch(setAuthProfile(authUserProfile(currentUser.auth)));
    dispatch(setAuthSuccess());
  }
  dispatch(setInitializeSuccess());
}