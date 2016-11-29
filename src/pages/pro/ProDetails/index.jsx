import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Pro from '../../../containers/pro/Pro'
import { loadPro } from '../../../containers/pro/Pro/ducks'

class ProDetails extends Component {
  componentWillMount() {
    this.props.loadPro(this.props.params.proId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.proId !== nextProps.params.proId) {
      this.props.loadPro(nextProps.params.proId)
    }
  }

  render() {
    const { pro } = this.props

    if (!pro.get('id')) {
      return (<p>Loading...</p>)
    }

    return (
      <div>
        <Pro pro={pro} />
      </div>
    )
  }
}

ProDetails.propTypes = {
  params: React.PropTypes.object,
  pro: PropTypes.object,
  loadPro: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    pro: state.pro
  }
}

export default connect(mapStateToProps, {
  loadPro,
})(ProDetails)
