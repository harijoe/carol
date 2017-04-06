import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { FullscreenNavigation } from 'containers'

const Layout = props => (
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    <FullscreenNavigation />
    {props.children}
  </PageTemplate>
)

Layout.propTypes = {
  children: React.PropTypes.any,
}

export default Layout
