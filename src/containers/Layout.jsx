import React from 'react'
import Header from '../components/Header'

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: React.PropTypes.object
}

export default Layout
