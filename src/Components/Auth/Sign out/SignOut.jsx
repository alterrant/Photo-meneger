import React from 'react';
import {setAuthOut} from "../../../redux/authReducer";
import {connect} from "react-redux";
import {logOut} from "../../../firebase/auth";
import {getAuth} from "firebase/auth";

const LogOut = ({setAuthOut}) => {

  const handleLogOut = () => {
    logOut();
    setAuthOut();
  }

  return (
      <button onClick={handleLogOut}>Sign Out</button>
  )
}

export default connect(null, {setAuthOut})(LogOut);