import {createSlice} from '@reduxjs/toolkit';
import {setAuthProfile} from "./authReducer";

const initialState = {
  isInitialized: false
}

export const initialize = (currentUser) => (dispatch) => {
  dispatch(setAuthProfile(currentUser));
  dispatch(setInitializedSuccess());
}

const initialiseAppSlice = createSlice({
  name: 'initialiseApp',
  initialState,
  reducers: {
    setInitializedSuccess(state, action) {
      state.isInitialized = true;
    }
  }
})

export const {setInitializedSuccess} = initialiseAppSlice.actions;

export default initialiseAppSlice.reducer;