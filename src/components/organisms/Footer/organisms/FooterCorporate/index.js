import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { theme } from 'utils/style'

import { List, ListItem, Link, Icon } from 'components'

const Wrapper = styled.div`
  width: 100%;
  padding: ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')} ${theme('spaces.xl')};
  background-color: #000;
`

const StyledList = styled(List)`
  padding: ${theme('spaces.s')} 0 ${theme('spaces.s')} 0;
  margin: 0;
  color: ${theme('colors.white')};
  text-decoration: none;
  list-style-type: none;
`

const StyledLink = styled(Link)`
  padding-top: ${theme('spaces.s')};
  color: ${theme('colors.white')};
  text-decoration: none;
`

const StyledLinkPhone = styled(Link)`
  margin: ${theme('spaces.s')} 0 ${theme('spaces.s')} 0;
  color: ${theme('colors.secondary')};
  font-family: 'andes-black', sans-serif;
  font-size: ${theme('fonts.size.m')};
  font-weight: normal;
  text-decoration: none;
`

const StyledListItem = styled(ListItem)`
  margin: 0;
  padding-left: 0;
  padding-bottom: ${theme('spaces.xs')};
`

const StyledIcon = styled(Icon)`
  height: 64px;
  width: 50px;
  padding-right: ${theme('spaces.s')};
`

const FooterCorporate = () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col>
          <StyledList>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.language" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.help" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.about" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.press" />
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </Col>
        <Col>
          <StyledList>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.phone_help" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLinkPhone><Icon icon="support-phone" /> 01 77 86 80 97</StyledLinkPhone>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.phone_pros" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLinkPhone><Icon icon="support-pro" /> 01 77 86 71 91</StyledLinkPhone>
            </StyledListItem>
          </StyledList>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Link><StyledIcon icon="logo-white-withoutsignet" /></Link>
        </Col>
        <Col>
          <StyledList>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.privacy_policy" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.notice" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink>
                <FormattedMessage id="footer.corporate.use" />
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
)

FooterCorporate.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(FooterCorporate)
