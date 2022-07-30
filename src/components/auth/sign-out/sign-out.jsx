import React from 'react';
import {useDispatch} from "react-redux";
import {loggingOut} from "../../../redux/auth-reducer";
import {motion} from "framer-motion";

const LogOut = () => {
  const dispatch = useDispatch();

  return (
      <div>
        <motion.button className="buttonLogOut"
                       whileHover={{
                         boxShadow: `3px 3px 3px rgba(63, 44, 138, 0.49)`
                       }}
                       onClick={() => dispatch(loggingOut())}>Sign Out</motion.button>
      </div>
  )
}

export default LogOut;