import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DropDownMenu } from 'components'

const DropDownMenuContainer = ({ routing, label, children }) => (
  <DropDownMenu routing={routing} label={label}>{children}</DropDownMenu>
)

DropDownMenuContainer.propTypes = {
  routing: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.any,
}

const mapStateToProps = state => ({ routing: state.routing })

export default connect(mapStateToProps)(DropDownMenuContainer)
