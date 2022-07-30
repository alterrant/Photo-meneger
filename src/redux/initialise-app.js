import {createSlice} from '@reduxjs/toolkit';
import {setAuthProfile} from "./auth-reducer";
import {createUserProfile} from "../firebase/auth";

const initialState = {
  isInitialized: false
}

export const initialize = (currentUser) => (dispatch) => {
  if (currentUser) {
    const userProfile = createUserProfile(currentUser);

    dispatch(setAuthProfile(userProfile));
  }

  dispatch(setInitializedSuccess());
}

const initialiseAppSlice = createSlice({
  name: 'initialiseApp',
  initialState,
  reducers: {
    setInitializedSuccess(state) {
      state.isInitialized = true;
    }
  }
})

export const {setInitializedSuccess} = initialiseAppSlice.actions;

export default initialiseAppSlice.reducer;