import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { isAuthenticated } from '../utils/auth'

const requiresAuth = (AuthenticatedComponent) => {
  class Authentication extends Component {
    componentDidMount() {
      this.checkAndRedirect()
    }

    componentDidUpdate() {
      this.checkAndRedirect()
    }

    checkAndRedirect() {
      const { dispatch, location, grantType } = this.props

      // Not authenticated? Redirect to login
      if (!isAuthenticated(grantType)) {
        dispatch(push({
          pathname: '/login',
          state: { redirectPathname: location.pathname }
        }))
      }
    }

    render() {
      const { grantType } = this.props

      return (
        isAuthenticated(grantType) ? <AuthenticatedComponent {...this.props} /> : null
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      grantType: state.auth.get('grantType')
    }
  }

  Authentication.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object,
    grantType: React.PropTypes.string
  }

  return connect(mapStateToProps)(Authentication)
}

export default requiresAuth
