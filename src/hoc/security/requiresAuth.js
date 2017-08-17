import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fromAuth, fromRouting } from 'store/selectors'

const requiresAuth = AuthenticatedComponent => {
  class Authentication extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      redirectPathname: PropTypes.string,
      isAuthenticated: PropTypes.bool,
    }

    componentDidMount() {
      this.checkAndRedirect()
    }

    componentDidUpdate() {
      this.checkAndRedirect()
    }

    checkAndRedirect() {
      const { dispatch, redirectPathname, isAuthenticated } = this.props

      // Not authenticated? Redirect to login
      if (!isAuthenticated) {
        dispatch(
          push({
            pathname: '/login',
            state: { redirectPathname },
          }),
        )
      }
    }

    render() {
      const { isAuthenticated } = this.props

      return isAuthenticated ? <AuthenticatedComponent {...this.props} /> : null
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: fromAuth.isAuthenticated(state),
    redirectPathname: fromRouting.getPathname(state) + fromRouting.getSearch(state),
  })

  return connect(mapStateToProps)(Authentication)
}

export default requiresAuth
