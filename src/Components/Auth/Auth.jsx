import SignUp from "./Sign up/SignUp";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import SignIn from "./Sign in/SignIn";
import {useState} from "react";

export const Auth = ({currentUser, setCurrentUser}) => {

  const signUp = async ({email, password}) => {
    try {

      const auth = getAuth();

      const signUpUser = await createUserWithEmailAndPassword(auth, email, password);
      const signedUpUser = signUpUser.user;

    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  }

  const signIn = async ({email, password}) => {
    const auth = getAuth();

    try {
      const signInUser = await signInWithEmailAndPassword(auth, email, password);
      const signedInUser = signInUser.user;

    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }

    //наблюдатель за пользователем

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setCurrentUser(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  return (
      <>
        <SignUp onSubmit={signUp}/>
        <SignIn onSubmit={signIn}/>
      </>
  )
}