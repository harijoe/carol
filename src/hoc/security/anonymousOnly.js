import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fromAuth } from 'store/selectors'

const anonymousOnly = (AnonymousComponent) => {
  class Anonymous extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      location: PropTypes.shape({
        state: PropTypes.shape({
          redirectPathname: PropTypes.string,
        }),
      }),
      isAuthenticated: PropTypes.bool,
    }

    componentDidMount() {
      this.checkAndRedirect()
    }

    componentDidUpdate() {
      this.checkAndRedirect()
    }

    // eslint-disable-next-line class-methods-use-this
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

  const mapStateToProps = state => ({
    isAuthenticated: fromAuth.isAuthenticated(state),
  })

  return connect(mapStateToProps)(Anonymous)
}

export default anonymousOnly
