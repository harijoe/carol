import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { authLogout } from 'store/actions'
import AccountMenu from 'components/AccountMenu'

const AccountMenuContainer = props => <AccountMenu {...props} />

AccountMenuContainer.propTypes = {
  logout: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  logout: e => {
    e.preventDefault()

    dispatch(authLogout())
  },
})

export default connect(null, mapDispatchToProps)(AccountMenuContainer)
