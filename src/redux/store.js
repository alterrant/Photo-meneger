import initialiseAppReducer from "./initialise-app";
import authReducer from "./auth-reducer";
import photoStorageReducer from "./photo-storage";
import {reducer as formReducer} from "redux-form";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    initialiseApp: initialiseAppReducer,
    auth: authReducer,
    photoStorage: photoStorageReducer,
    form: formReducer
  }
})

export default store;