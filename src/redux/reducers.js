import {reducer as formReducer} from 'redux-form';
import {combineReducers} from "redux";
import initialiseApp from "./initialiseApp";

const reducers = {
  initialiseApp: initialiseApp,
  form: formReducer
}
export const reducer = combineReducers(reducers);