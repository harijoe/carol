import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
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

const CookiesBanner = () => (
  <Wrapper>
    <Container>
      <Col xs={10} m={11}>
        <StyledParagraph>
          <FormattedMessage id="cookies.message" />
          <Link to="/"><FormattedMessage id="cookies.more" /></Link>
        </StyledParagraph>
      </Col>
      <Col xs={2} m={1}>
        <Link to="/"><CloseIcon icon="close" /></Link>
      </Col>
    </Container>
  </Wrapper>
)

CookiesBanner.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(CookiesBanner)
