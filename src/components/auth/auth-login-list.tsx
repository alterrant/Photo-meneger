import SignUp from "./sign-up/sign-up";
import SignIn from "./sign-in/sign-in";
import reducerLoginList, {initialState, setEmailPassLogin, setSignUp} from "../../store/auth-login-list";
import {FC, useReducer} from "react";

export const AuthLoginList = () => {
  const [state, dispatch] = useReducer(reducerLoginList, initialState);
  const signInForm = () => dispatch(setEmailPassLogin());
  const signUpForm = () => dispatch(setSignUp());

  switch (state.authLogin) {
    case "signUp":
      return <SignUp signInForm={signInForm}/>
    case "signInEmailPass":
      return <SignIn signUpForm={signUpForm}/>;
    default:
      return <SignUp signInForm={signInForm}/>
  }
}