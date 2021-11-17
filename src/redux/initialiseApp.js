import {getAuth} from "firebase/auth";
import {onAuthStateChanged} from "../firebase/auth";

const SET_INITIALIZED_SUCCESS = "INITIALISEAPP/SET_INITIALIZED_SUCCESS";
const UPDATE_STATUS_AUTHORISED_USER = "UPDATE_STATUS_AUTHORISED_USER";

const initState = {
  isInitialized: false,
  userId: null
}

const initialiseApp = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      debugger
      return {...state, isInitialized: true}
    case UPDATE_STATUS_AUTHORISED_USER:
      return {...state, userId: action.userId}
    default:
      return state

  }
}

export default initialiseApp;

export const setInitializeSuccess = () => ({type: SET_INITIALIZED_SUCCESS});
export const updateUserId = (userId) => ({type: UPDATE_STATUS_AUTHORISED_USER, userId})
export const initialize = () => (dispatch) => {

  const auth = getAuth();

  /*onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      dispatch(updateUserId(uid))
    }
  });*/
debugger
  dispatch(setInitializeSuccess);
}