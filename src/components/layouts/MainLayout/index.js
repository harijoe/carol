import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from 'components'
import { Header, PageTemplate } from 'containers'

const Layout = props => (
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    {props.children}
  </PageTemplate>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
