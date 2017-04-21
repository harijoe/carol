import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { projectElaborationPreValidate } from 'store/actions'
import { fromProjectElaboration } from 'store/selectors'

class ProjectPreValidatePageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
    preValidationUrl: PropTypes.string,
  }

  componentWillMount() {
    const { request, preValidationUrl } = this.props

    if (preValidationUrl == null) {
      return
    }

    request()
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  preValidationUrl: fromProjectElaboration.getPreValidationUrl(state),
})

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(projectElaborationPreValidate.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPreValidatePageContainer)
