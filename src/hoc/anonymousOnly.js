import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { isAuthenticated } from 'utils/auth'

const anonymousOnly = (AnonymousComponent) => {
  class Anonymous extends Component {
    static propTypes = {
      dispatch: React.PropTypes.func.isRequired,
      location: React.PropTypes.shape({
        state: React.PropTypes.shape({
          redirectPathname: React.PropTypes.string,
        }),
      }),
      grantType: React.PropTypes.string,
    }

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

  const mapStateToProps = state => ({
    grantType: state.auth.get('grantType'),
  })

  return connect(mapStateToProps)(Anonymous)
}

export default anonymousOnly
