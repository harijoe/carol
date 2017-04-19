import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { authLogout } from 'store/actions'
import { AccountMenu } from 'components'

const AccountMenuContainer = props => (
  <AccountMenu {...props} />
)

AccountMenuContainer.propTypes = {
  logout: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  logout: (e) => {
    e.preventDefault()

    dispatch(authLogout())
  },
})

export default connect(null, mapDispatchToProps)(AccountMenuContainer)
