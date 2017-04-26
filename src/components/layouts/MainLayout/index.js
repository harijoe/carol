import React from 'react'

import { PageTemplate, Footer } from 'components'
import { Header } from 'containers'

const Layout = props => (
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    {props.children}
  </PageTemplate>
)

Layout.propTypes = {
  children: React.PropTypes.any,
}

export default Layout
