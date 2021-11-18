import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {setAuthUser} from "../../../redux/authReducer";
import {signIn} from "../../../firebase/auth";

const SignInForm = (props) => {

  const signInFunc = async ({email, password}) => {
    //плохо, что функция отправляет запрос на сервер и возвращает юзера
    const signedUser = await signIn({email, password});
    signedUser && props.setAuthUser(signedUser);
  }

  return (
      <form onSubmit={props.handleSubmit(signInFunc)}>
        <Field component={'input'} placeholder={'Email'} name={'email'}/>
        <Field component={'input'} placeholder={'Password'} name={'password'} type={'password'}/>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
  )
}
const SignInFormRedux = reduxForm({
  form: 'signIn'
})(SignInForm)

export default connect(null, {setAuthUser})(SignInFormRedux);