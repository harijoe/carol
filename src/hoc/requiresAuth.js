import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fromAuth } from 'store/selectors'

const requiresAuth = (AuthenticatedComponent) => {
  class Authentication extends Component {
    static propTypes = {
      dispatch: React.PropTypes.func.isRequired,
      location: React.PropTypes.shape({
        pathname: React.PropTypes.string,
      }),
      isAuthenticated: React.PropTypes.bool,
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
