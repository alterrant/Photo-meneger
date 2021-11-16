import React, {Component, ReactPropTypes as PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';

const SignInForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
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

export default SignInFormRedux;