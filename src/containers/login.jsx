import { Link } from 'react-router'
import React from 'react'

const Login = () => {
  return (
    <div>
      <input placeholder="Username" type="text" />
      <input placeholder="Password" type="password" />

      <button
        // onClick={this.onClickLogin.bind(this)}
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
