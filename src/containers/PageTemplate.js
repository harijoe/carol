import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import { PageTemplate } from 'components'

const PageTemplateContainer = props =>
  <PageTemplate {...props}>
    {props.children}
  </PageTemplate>

PageTemplateContainer.propTypes = {
  children: PropTypes.any,
}

const mapStateToProps = state => ({
  ssr: fromContext.isSSR(state),
})

export default connect(mapStateToProps)(PageTemplateContainer)
