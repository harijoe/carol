import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { projectElaborationPreValidate } from 'store/actions'

class ProjectPreValidatePageContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
    params: PropTypes.shape({
      chatbotStorageId: PropTypes.string,
    }),
  }

  componentWillMount() {
    const { request, params: { chatbotStorageId } } = this.props

    request(chatbotStorageId)
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  request: chatbotStorageId => dispatch(projectElaborationPreValidate.request(chatbotStorageId)),
})

export default connect(null, mapDispatchToProps)(ProjectPreValidatePageContainer)
