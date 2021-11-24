import SignUp from "./Sign up/SignUp";
import SignIn from "./Sign in/SignIn";
import reducerLoginList, {initialState, setEmailPassLogin, setSignUp} from "../../redux/authLoginList";
import {useReducer} from "react";

export const AuthLoginList = () => {

  const [state, dispatch] = useReducer(reducerLoginList, initialState);

  switch (state.authLogin) {
    case "signUp":
      return <SignUp logIn={() => dispatch(setEmailPassLogin())}/>
    case "signInEmailPass":
      return <SignIn logIn={() => dispatch(setSignUp())}/>;
  }
}