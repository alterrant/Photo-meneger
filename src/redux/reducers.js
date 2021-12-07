import {reducer as formReducer} from 'redux-form';
import {combineReducers} from "redux";
import initialiseApp from "./initialiseApp";
import authReducer from "./authReducer";
import {photoStorage} from "./photoStorage";

const reducers = {
  initialiseApp: initialiseApp,
  auth: authReducer,
  photoStorage: photoStorage,
  form: formReducer
}
export const reducer = combineReducers(reducers);