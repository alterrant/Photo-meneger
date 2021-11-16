import {reducer as formReducer} from 'redux-form';
import {combineReducers} from "redux";

const reducers = {
  // ... your other reducers here ...
  form: formReducer
}
export const reducer = combineReducers(reducers);