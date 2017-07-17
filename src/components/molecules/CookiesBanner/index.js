import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import cookie from 'services/cookies'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { cookiesUrl } from 'config'

import { Icon, Paragraph, Row, Col, Link } from 'components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 20;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  
  .hidden {
    display: none;
  }
`

const Container = styled(Row)`
  max-width: ${theme('grid.container')}rem;
  margin: auto;
`

const StyledParagraph = styled(Paragraph)`
  padding-bottom: ${theme('spaces.m')};
  padding-top: ${theme('spaces.m')};
  font: normal ${theme('fonts.size.s')} ${theme('fonts.family.montserratLight')};
  color: ${theme('colors.white')};
`

const CloseIcon = styled(Icon)`
  margin: ${theme('spaces.m')} auto auto auto;

  .cls-1 {
    fill: ${theme('colors.white')};
  }
`

class CookiesBanner extends Component {
  state = {
    hidden: cookie.get('cookies_banner_hidden') || false,
  }

  componentDidMount() {
    cookie.set('cookies_banner_hidden', true)
  }

  handleClose = (e) => {
    e.preventDefault()
    this.setState({ hidden: true })
  }

  handleClickMore = () => {
    cookie.delete('cookies_banner_hidden')
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
              <Link to={cookiesUrl} onClick={this.handleClickMore}><FormattedMessage id="cookies.more" /></Link>
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
