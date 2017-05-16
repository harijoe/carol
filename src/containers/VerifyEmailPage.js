import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { verifyEmail } from 'store/actions'

class VerifyEmailPageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(verifyEmail.request()),
})

export default connect(null, mapDispatchToProps)(VerifyEmailPageContainer)
