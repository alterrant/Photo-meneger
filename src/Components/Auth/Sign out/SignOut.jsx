import React from 'react';
import {connect} from "react-redux";
import {logOut} from "../../../redux/authReducer";

const LogOut = ({logOut}) => {
  return (
      <button onClick={logOut}>Sign Out</button>
  )
}

export default connect(null, {logOut})(LogOut);