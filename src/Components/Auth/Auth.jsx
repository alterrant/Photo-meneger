import SignUp from "./Sign up/SignUp";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import SignIn from "./Sign in/SignIn";
//import SignOut from "./Sign out/SignOut";
import LogOut from "./Sign out/SignOut";

export const Auth = ({currentUser, setCurrentUser}) => {

  const auth = getAuth();

  const signUp = async ({email, password}) => {
    try {
      const signUpUser = await createUserWithEmailAndPassword(auth, email, password);
      const signedUpUser = signUpUser.user;

    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  }

  const signIn = async ({email, password}) => {
    try {
      debugger
      const signInUser = await signInWithEmailAndPassword(auth, email, password);
      const signedInUser = signInUser.user;
      setCurrentUser(auth.currentUser)
    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  }

 /* const signOut = async () => {
    try {
      debugger
      await signOut(auth);
    } catch(error) {
      console.log(error)
    }
  }*/
//need refactor
  return (
      <>
        <SignUp onSubmit={signUp}/>
        <SignIn onSubmit={signIn}/>
        {/*<SignOut onSubmit={signOut}/>*/}
        <LogOut/>
      </>
  )
}