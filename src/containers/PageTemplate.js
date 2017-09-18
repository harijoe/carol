import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { toggleSearchModal } from 'store/actions'

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
  searchModalIsOpen: fromContext.searchModalIsOpen(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSearchModal: (isExpanded) => dispatch(toggleSearchModal(isExpanded)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplateContainer)
