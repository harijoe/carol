import React from 'react'

import { PageTemplate, Header, Footer } from 'components'

const Layout = props => (
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    {props.children}
  </PageTemplate>
)

Layout.propTypes = {
  children: React.PropTypes.any,
}

export default Layout
