import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const anonymousOnly = (AnonymousComponent) => {
  class Anonymous extends Component {
    componentDidMount() {
      this.checkAndRedirect()
    }

    componentDidUpdate() {
      this.checkAndRedirect()
    }

    checkAndRedirect() {
      const { dispatch, isAuthenticated } = this.props

      if (isAuthenticated) {
        dispatch(push('/'))
      }
    }

    render() {
      const { isAuthenticated } = this.props

      return (
        !isAuthenticated ? <AnonymousComponent {...this.props} /> : null
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: 'password' === state.auth.get('grantType')
    }
  }

  Anonymous.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    isAuthenticated: React.PropTypes.bool
  }

  return connect(mapStateToProps)(Anonymous)
}

export default anonymousOnly
