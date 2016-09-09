import { Link } from 'react-router'
import React from 'react'
import { login } from '../actions/auth'
import Input from '../components/input'

const onClickLogin = () => {
  login({
    username: this.id.usernameInput.value,
    password: this.id.passwordInput.value
  })
}

const Login = () => {
  const attrUsername = {
    className: 'username',
    id: 'username',
    placeholder: 'Username',
    type: 'text'
  }
  const attrPassword = {
    className: 'password',
    id: 'password',
    placeholder: 'Password',
    type: 'text'
  }

  return (
    <div>
      <Input  attr={attrUsername} />
      <Input  attr={attrPassword} />
      <button
        onClick={onClickLogin}
        type="button"
      >
        Login
      </button>
      {/* {divError} */}
      <Link to="/">Back</Link>
    </div>
  )
}

export default Login
