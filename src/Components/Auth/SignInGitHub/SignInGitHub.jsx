import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {setAuthUser} from "../../../redux/authReducer";
import {logInGoogle, signIn} from "../../../firebase/auth";
import {NavLink} from "react-router-dom";

const SignInForm = (props) => {

  const signInFunc = async ({email, password}) => {
    //плохо, что функция отправляет запрос на сервер и возвращает юзера
    const signedUser = await logInGoogle({email, password});
    signedUser && props.setAuthUser(signedUser);
  }

  return (<>
        <form className="auth-form-container" onSubmit={props.handleSubmit(signInFunc)}>

          <span className="auth-form-title">
						Sign In With
          </span>

          <div className="login-button-wrapper">
            <div className="auth-github login-button">github</div>
            <div className="auth-google login-button">google</div>
          </div>
          <a href="#" className="btn-face m-b-20">
            <i className="fa fa-facebook-official"></i>
            GitHub
          </a>

          <a href="#" className="btn-google m-b-20">
            {/*<img src="images/icons/icon-google.png" alt="GOOGLE"/>*/}
            Google
          </a>

          <div className="auth-input-label">
            Username
          </div>
          <Field className="auth-input" component={'input'} name={'email'}/>

          {/*<div className="wrap-input100 validate-input" data-validate="Username is required">
          <input className="input100" type="text" name="username"/>
          <span className="focus-input100"></span>
        </div>*/}
          <div className="auth-input-label">
            Password
          </div>
          <Field className="auth-input" component={'input'} name={'password'} type={'password'}/>
          {/*<div className="wrap-input100 validate-input" data-validate="Password is required">
          <input className="input100" type="password" name="pass"/>
          <span className="focus-input100"></span>
        </div>*/}


          {/*<div className="container-login100-form-btn m-t-17">
          <button className="login100-form-btn">
            Sign In
          </button>
        </div>*/}

          <div className="auth-submit-container">
            <button className="auth-submit-button" type="submit">Sign In</button>
          </div>

          <div className="auth-signUp">
            <p>
              Not a member? <span className="auth-text-link"
                                  onClick={() => props.setSignUp(true)}>
              Sign up now</span>
            </p>
          </div>
        </form>
      </>
  )
}
const SignInGoogleFormRedux = reduxForm({
  form: 'signInGoogle'
})(SignInForm)

export default connect(null, {setAuthUser})(SignInGoogleFormRedux);