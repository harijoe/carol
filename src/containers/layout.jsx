import React from 'react'
import { Link } from 'react-router'

const Layout = (props) => {
  return (
    <div>
      <Link to="login">Login</Link>
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: React.PropTypes.object
}

export default Layout
