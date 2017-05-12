import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import cookie from 'react-cookie'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon, Paragraph, Col, Link } from 'components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  
  .hidden {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  max-width: 120rem;
  margin: auto;
`

const StyledParagraph = styled(Paragraph)`
  padding-bottom: ${theme('spaces.m')};
  padding-left: ${theme('spaces.s')};
  font: normal ${theme('fonts.size.s')} ${theme('fonts.family.montserratLight')};
  color: ${theme('colors.white')};
`

const CloseIcon = styled(Icon)`
  margin: auto;
  height: 100%;

  .cls-1 {
    fill: ${theme('colors.white')};
  }
`

class CookiesBanner extends Component {
  state = {
    hidden: cookie.load('cookies_banner_hidden') || false,
  }

  componentDidMount() {
    cookie.save('cookies_banner_hidden', true)
  }

  handleClose = () => {
    this.setState({ hidden: true })
  }

  handleClickMore = () => {
    cookie.remove('cookies_banner_hidden')
  }

  render() {
    const { hidden } = this.state

    if (hidden) {
      return null
    }

    return (
      <Wrapper className={hidden && 'hidden'}>
        <Container>
          <Col xs={10} m={11}>
            <StyledParagraph>
              <FormattedMessage id="cookies.message" />
              <Link to="/" onClick={this.handleClickMore}><FormattedMessage id="cookies.more" /></Link>
            </StyledParagraph>
          </Col>
          <Col xs={2} m={1}>
            <Link onClick={this.handleClose}><CloseIcon icon="close" /></Link>
          </Col>
        </Container>
      </Wrapper>
    )
  }
}

export default CookiesBanner
