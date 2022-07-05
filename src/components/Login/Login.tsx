import React from 'react';
import { Field, reduxForm } from 'redux-form'

export const Login = () => {
    // const submit = (value: any) => {
    //
    // }
    return (
        <div>
            <h1>Login</h1>
           <LoginFormContainer />
        </div>
    );
};

const LoginForm = (props: any) => {
    const { handleSubmit } = props
  return (
      <form onSubmit={handleSubmit}>
          <div>
              <Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
          </div>
          <div>
              <Field type={'password'} placeholder={'Password'} name={'password'} component={'input'}/>
          </div>
          <div>
              <Field type={'checkbox'}/>
          </div>
          <div>
              <button>Login</button>
          </div>
      </form>
  )
}
const LoginFormContainer = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)
