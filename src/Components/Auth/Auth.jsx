import SignUp from "./Sign up/SignUp";
import SignIn from "./Sign in/SignIn";
import LogOut from "./Sign out/SignOut";
import {signUp} from "../../firebase/auth";

const Auth = () => {

//need refactor
  return (
      <>
        <SignUp />
        <SignIn />
        <LogOut/>
      </>
  )
}

export default Auth;