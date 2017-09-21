import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { validateEmail } from 'store/actions'
import { EmailValidationPopin } from 'components'

class EmailValidationPopinContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
    show: PropTypes.bool,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.props.request({ origin: 'validation-popin' })
    }
  }

  render() {
    return <EmailValidationPopin {...this.props} />
  }
}

const mapStateToProps = state => ({
  show: fromContext.getEmailValidationPopin(state),
})

const mapDispatchToProps = dispatch => ({
  request: data => dispatch(validateEmail.request(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailValidationPopinContainer)
