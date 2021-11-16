import React, {Component, ReactPropTypes as PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';

const ContactForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
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