import React from 'react';
import {connect} from "react-redux";
import {logOut} from "../../../redux/authReducer";
import {motion} from "framer-motion";

const LogOut = ({logOut}) => {
  return (
      <div>
        <motion.button className="buttonLogOut"
                       whileHover={{
                         boxShadow: `3px 3px 3px rgba(63, 44, 138, 0.49)`
                       }}
                       onClick={logOut}>Sign Out</motion.button>
      </div>
  )
}

export default connect(null, {logOut})(LogOut);