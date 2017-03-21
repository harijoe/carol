import React from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Icon, Link } from 'components'
import { theme } from 'utils/style'

const Wrapper = styled.div`
  width: 100%;
  padding: ${theme('spaces.m')};
  background-color: ${theme('colors.white')};
`

const StyledIcon = styled(Icon)`
  height: ${theme('sapces.l')};
  margin-right: ${theme('spaces.l')};
`

const FooterSocialNetworks = () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col>
          <Link><StyledIcon icon="social-facebook" /></Link>
          <Link><StyledIcon icon="social-twitter" /></Link>
          <Link><StyledIcon icon="social-google" /></Link>
          <Link><StyledIcon icon="social-linkedin" /></Link>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
)

export default FooterSocialNetworks
