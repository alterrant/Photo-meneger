import {reducer as formReducer} from 'redux-form';
import {combineReducers} from "redux";
import initialiseApp from "./initialiseApp";
import authReducer from "./authReducer";

const reducers = {
  initialiseApp: initialiseApp,
  auth: authReducer,
  form: formReducer
}
export const reducer = combineReducers(reducers);