import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const requiresAuth = (AuthenticatedComponent) => {
  class Authentication extends Component {
    componentDidMount() {
      this.checkAndRedirect()
    }

    componentDidUpdate() {
      this.checkAndRedirect()
    }

    checkAndRedirect() {
      const { dispatch, location, isAuthenticated } = this.props

      if (!isAuthenticated) {
        dispatch(push({
          pathname: '/login',
          state: { nextPathname: location.pathname }
        }))
      }
    }

    render() {
      const { isAuthenticated } = this.props

      return (
        isAuthenticated ? <AuthenticatedComponent {...this.props} /> : null
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: 'password' === state.auth.get('grantType')
    }
  }

  Authentication.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  }

  return connect(mapStateToProps)(Authentication)
}

export default requiresAuth
