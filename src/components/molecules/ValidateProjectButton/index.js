import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'components'
import { theme } from 'utils/style'
import pushGtmEvent from 'utils/gtm'

const StyledLink = styled(Link)`
  margin-bottom: ${theme('spaces.s')};
  min-width: 100%;
`

class ValidateProjectButton extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    openPopin: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    setRedirectPathname: PropTypes.func.isRequired,
    heroAnswer: PropTypes.string,
    key2label: PropTypes.string,
  }

  state = {
    clicked: false,
  }

  render() {
    const { url, authenticated, title, openPopin, setRedirectPathname, heroAnswer, key2label } = this.props

    return (
      <StyledLink
        onClick={() => {
          setRedirectPathname(url)
          openPopin()
          if (!this.state.clicked) pushGtmEvent({ event: 'FormCreated', chatbotKey1: heroAnswer, chatbotKey2: key2label })
          this.setState({ clicked: true })
        }}
        to={authenticated && url}
        button
      >
        {title}
      </StyledLink>
    )
  }
}

export default ValidateProjectButton
