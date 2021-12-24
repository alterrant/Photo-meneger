import React from 'react';
import {connect} from "react-redux";
import {logOut} from "../../../redux/authReducer";

const LogOut = ({logOut}) => {
  return (
      <div className="buttonLogOut">
        <button onClick={logOut}>Sign Out</button>
      </div>
  )
}

export default connect(null, {logOut})(LogOut);