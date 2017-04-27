import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fromAuth } from 'store/selectors'

const requiresAuth = (AuthenticatedComponent) => {
  class Authentication extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      location: PropTypes.shape({
        pathname: PropTypes.string,
      }),
      isAuthenticated: PropTypes.bool,
    }

    componentDidMount() {
      this.checkAndRedirect()
    }

    componentDidUpdate() {
      this.checkAndRedirect()
    }

    checkAndRedirect() {
      const { dispatch, location, isAuthenticated } = this.props

      // Not authenticated? Redirect to login
      if (!isAuthenticated) {
        dispatch(push({
          pathname: '/login',
          state: { redirectPathname: location.pathname },
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

  const mapStateToProps = state => ({
    isAuthenticated: fromAuth.isAuthenticated(state),
  })

  return connect(mapStateToProps)(Authentication)
}

export default requiresAuth
