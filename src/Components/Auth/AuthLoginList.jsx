import SignUp from "./Sign up/SignUp";
import SignIn from "./Sign in/SignIn";
import reducerLoginList, {
  initialState,
  setEmailPassLogin,
  setGitHubLogin,
  setGoogleLogin,
  setSignUp
} from "../../redux/authLoginList";
import SignInGitHub from "./SignInGitHub/SignInGitHub";
import {useReducer} from "react";

export const AuthLoginList = () => {

  const [state, dispatch] = useReducer(reducerLoginList, initialState);

  const goToSignUp = () => dispatch(setSignUp());
  const goToSignIn = () => dispatch(setEmailPassLogin());
  const goToGoogleLogin = () => dispatch(setGoogleLogin());
  const goToGitHubLogin = () => dispatch(setGitHubLogin());

  switch (state.authLogin) {
    case "signUp":
      return <SignUp dispatch={dispatch}/>
    case "signInEmailPass":
      return <SignIn logIn={() => dispatch(setSignUp())}/>;
    case "signInGitHub":
      return <SignInGitHub dispatch={dispatch}/>
  }
}