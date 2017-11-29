import React from 'react'
import PropTypes from 'prop-types'

import Header from 'containers/Header'
import PageTemplate from 'containers/PageTemplate'
import Footer from 'containers/Footer'

const Layout = props =>
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    {props.children}
  </PageTemplate>

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
