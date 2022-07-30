import SignUp from "./sign-up/sign-up";
import SignIn from "./sign-in/sign-in";
import reducerLoginList, {initialState, setEmailPassLogin, setSignUp} from "../../redux/auth-login-list";
import {useReducer} from "react";

export const AuthLoginList = () => {

  const [state, dispatch] = useReducer(reducerLoginList, initialState);

  switch (state.authLogin) {
    case "signUp":
      return <SignUp signInForm={() => dispatch(setEmailPassLogin())}/>
    case "signInEmailPass":
      return <SignIn signUpForm={() => dispatch(setSignUp())}/>;
  }
}