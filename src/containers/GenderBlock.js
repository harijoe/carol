import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import GenderBlock from 'components/GenderBlock'

const GenderBlockContainer = props => <GenderBlock {...props} />

GenderBlockContainer.propTypes = {
  language: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  language: fromContext.getLang(state),
})

export default connect(mapStateToProps)(GenderBlockContainer)
