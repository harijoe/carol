import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { isAuthenticated } from '../utils/auth'

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
      const { dispatch, location, grantType } = this.props

      // Authenticated? Move redirectPathname if exist, home otherwise
      if (isAuthenticated(grantType)) {
        dispatch(push(this.getRedirectPathname(location) || '/'))
      }
    }

    render() {
      const { location, grantType } = this.props

      const redirectPathname = this.getRedirectPathname(location)
      const props = Object.assign({}, this.props, { redirectPathname })

      return (
        !isAuthenticated(grantType) ? <AnonymousComponent {...props} /> : null
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      grantType: state.auth.get('grantType')
    }
  }

  Anonymous.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object,
    grantType: React.PropTypes.string
  }

  return connect(mapStateToProps)(Anonymous)
}

export default anonymousOnly
