import React from 'react'
import PropTypes from 'prop-types'

import { Header, PageTemplate, Footer } from 'containers'

const Layout = props => (
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    {props.children}
  </PageTemplate>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
