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

    getRedirectPathname(location) {
      return location && location.state && location.state.redirectPathname
        ? location.state.redirectPathname : null
    }

    checkAndRedirect() {
      const { dispatch, location, isAuthenticated } = this.props

      // Authenticated? Move redirectPathname if exist, home otherwise
      if (isAuthenticated) {
        dispatch(push(this.getRedirectPathname(location) || '/'))
      }
    }

    render() {
      const { location, isAuthenticated } = this.props

      const redirectPathname = this.getRedirectPathname(location)
      const props = Object.assign({}, this.props, { redirectPathname })

      return (
        !isAuthenticated ? <AnonymousComponent {...props} /> : null
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
    location: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  }

  return connect(mapStateToProps)(Anonymous)
}

export default anonymousOnly
