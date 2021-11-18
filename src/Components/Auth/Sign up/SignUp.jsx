import React, {Component, ReactPropTypes as PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {signUp} from "../../../firebase/auth";

const ContactForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit(signUp)}>
        <Field component={'input'} placeholder={'Email'} name={'email'}/>
        <Field component={'input'} placeholder={'Password'} name={'password'} type={'password'}/>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
  )
}

const ContactFormRedux = reduxForm({
  form: 'signUp'
})(ContactForm)

export default ContactFormRedux;