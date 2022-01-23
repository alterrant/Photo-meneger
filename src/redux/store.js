import initialiseAppReducer from "./initialiseApp";
import authReducer from "./authReducer";
import photoStorageReducer from "./photoStorage";
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