import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {setAuthUser} from "../../../redux/authReducer";
import {logInGitHub, logInGoogle, signIn} from "../../../firebase/auth";
import GitHubSVG from "../../assets/SVG/GitHub";
import {motion} from "framer-motion";

const SignInForm = (props) => {

  const signInFunc = async ({email, password}) => {
    //плохо, что функция отправляет запрос на сервер и возвращает юзера
    const signedUser = await signIn({email, password});
    signedUser && props.setAuthUser(signedUser);
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
              <p>Sign In</p>
            </motion.button>
          </div>

          <div className="auth-signUp">
            <p>
              Not a member? <motion.span className="auth-text-link"
                                         onClick={props.logIn}
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
  form: 'signIn'
})(SignInForm)

export default connect(null, {setAuthUser})(SignInFormRedux);