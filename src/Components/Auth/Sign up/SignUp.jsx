import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {signUp} from "../../../firebase/auth";
import {motion} from "framer-motion";

const ContactForm = (props) => {

  return (<>
        <form className="auth-form-container" onSubmit={props.handleSubmit(signUp)}>

          <span className="auth-form-title">
						Sign up
          </span>
          <div className="auth-input-label">
            Username
          </div>
          <Field className="auth-input" component={'input'} name={'email'}/>
          <div className="auth-input-label">
            Password
          </div>
          <Field className="auth-input" component={'input'} name={'password'} type={'password'}/>
          <div className="auth-submit-container">
            <motion.button className="auth-submit-button"
                           type="submit"
                           transition={{duration: 0.3}}
                           whileHover={{
                             boxShadow: "0px 4px 8px 0px rgba(31, 69, 112, 1)",
                             textShadow: "0px 0px 1px rgba(120, 120, 158, 0.74)"
                           }}>
              <p>Sign Up</p>
            </motion.button>
          </div>

          <div className="auth-signUp">
            <p>
              If a member, <motion.span className="auth-text-link"
                                         onClick={props.logIn}
                                         whileHover={{color: "rgb(78,65,113)"}}
            >
              sign in</motion.span>
            </p>
          </div>
        </form>
      </>
  )
}
const ContactFormRedux = reduxForm({
  form: 'signUp'
})(ContactForm)

export default ContactFormRedux;