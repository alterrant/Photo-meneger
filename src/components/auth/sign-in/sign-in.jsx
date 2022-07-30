import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {logIn} from "../../../redux/auth-reducer";
import {logInGitHub, logInGoogle, signIn} from "../../../firebase/auth";
import GitHubSVG from "../../assets/svg/github";
import {motion} from "framer-motion";
import {inputLoginForm} from "../../common/form-control/input";
import {validate} from "../../common/form-control/validators";

const SignInForm = (props) => {

  const signInFunc = ({email, password}) => {
    props.logIn({email, password});
  }

  return (<>
        <form className="auth-form-container" onSubmit={props.handleSubmit(signInFunc)}>

          <span className="auth-form-title">
						Sign In With
          </span>

          <div className="login-button-wrapper">
            <motion.div onClick={logInGitHub}
                        className="auth-github login-button"
                        transition={{duration: 0.3}}
                        whileHover={{
                          boxShadow: "0px 4px 8px 0px rgba(31, 69, 112, 1)",
                          textShadow: "0px 0px 1px rgba(31, 69, 112, 1)"
                        }}>
              <GitHubSVG/>
              GitHub
            </motion.div>
            <motion.div onClick={logInGoogle}
                        className="auth-google login-button"
                        transition={{duration: 0.3}}
                        whileHover={{
                          boxShadow: "0px 4px 8px 0px rgba(31, 69, 112, 1)",
                          textShadow: "0px 0px 1px rgba(31, 69, 112, 1)"
                        }}>
              Google
            </motion.div>
          </div>
          <div className="auth-input-label">
            Email
          </div>
          <Field className="auth-input" component={inputLoginForm} name={'email'}/>
          <div className="auth-input-label">
            Password
          </div>
          <Field className="auth-input" component={inputLoginForm} name={'password'} type={'password'}/>
          <div className="form-error-wrapper">
            <div className="form-error">
              {props.error}
            </div>
          </div>
          <div className="auth-submit-container">
            <motion.button className="auth-submit-button"
                           type="submit"
                           transition={{duration: 0.3}}
                           whileHover={{
                             boxShadow: "0px 4px 8px 0px rgba(31, 69, 112, 1)",
                             textShadow: "0px 0px 1px rgba(120, 120, 158, 0.74)"
                           }}>
              <p>Sign In</p>
            </motion.button>
          </div>
          <div className="auth-signUp">
            <p>
              Not a member? <motion.span className="auth-text-link"
                                         onClick={props.signUpForm}
                                         whileHover={{color: "rgb(78,65,113)"}}
            >
              Sign up now</motion.span>
            </p>
          </div>
        </form>
      </>
  )
}
const SignInFormRedux = reduxForm({
  form: 'signInForm',
  validate
})(SignInForm)

export default connect(null, {logIn})(SignInFormRedux);