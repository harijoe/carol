import React  from 'react'
import PropTypes  from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { cookiesUrl } from 'config'

import { Icon, Paragraph, Row, Col, Link } from 'components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 30;
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
  font-size: ${theme('fonts.size.s')};
  color: ${theme('colors.white')};
`

const CloseIcon = styled(Icon)`
  margin: ${theme('spaces.m')} auto auto auto;

  svg {
    fill: ${theme('colors.white')};
  }
`

const CookiesBanner = ({ showCookiesBanner, setCookiesBanner }) => {

  const handleClose = () => {
    setCookiesBanner(false)
  }

  if (showCookiesBanner) {
    return (
      <Wrapper>
        <Container>
          <Col xs={10} m={11}>
            <StyledParagraph>
              <FormattedMessage id="cookies.message" /> {' '}
              <Link to={cookiesUrl} onClick={handleClose}>
                <FormattedMessage id="cookies.more" />
              </Link>
            </StyledParagraph>
          </Col>
          <Col xs={2} m={1}>
            <Link onClick={handleClose}>
              <CloseIcon icon="close" />
            </Link>
          </Col>
        </Container>
      </Wrapper>
    )
  }

  return null
}

CookiesBanner.propTypes = {
  showCookiesBanner: PropTypes.bool.isRequired,
  setCookiesBanner: PropTypes.func.isRequired,
}

export default CookiesBanner
