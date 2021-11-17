import React from 'react';
import {getAuth, signOut} from "firebase/auth";

const logOut = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch(error) {
    console.log(error)
  }
}

const LogOut = () => {
  return (
      <button onClick={logOut}>Sign Out</button>
  )
}

export default LogOut;