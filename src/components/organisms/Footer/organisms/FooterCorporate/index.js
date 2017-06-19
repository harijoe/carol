import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { contentSiteUrl, locales } from 'config'
import messages from 'utils/messages'

import { List, ListItem, Link, Icon, Grid, Col, Row, Paragraph, Section } from 'components'
import { CountryMenu } from 'containers'

const StyledSection = styled(Section)`
  background-color: ${theme('colors.grayscale.darkest')};

  ${breakpoint('m')`
    padding-bottom: ${theme('spaces.l')};
    padding-top: ${theme('spaces.l')};
  `}

  ${breakpoint('xl')`
    padding-bottom: ${theme('spaces.xxl')};
    padding-top: ${theme('spaces.xxl')};
  `}
`

const StyledRow = styled(Row)`
  width: 100%;
`

const StyledList = styled(List)`
  padding: ${theme('spaces.s')} 0 ${theme('spaces.s')} 0;
  margin: 0;
  padding: 0;
  color: ${theme('colors.white')};
  list-style: none;
`

const StyledLink = styled(Link)`
  color: ${theme('colors.white')};
  text-decoration: none;
`

const StyledListItem = styled(ListItem)`
  margin: 0;
  padding-left: 0;
  padding-top: ${theme('spaces.s')};

  &:first-child {
    padding-top: 0;
  }
`

const StyledIcon = styled(Icon)`
  height: 64px;
  width: 50px;

  ${breakpoint('m')`
    height: auto;
    width: 70px;
  `}
`

const FirstCol = styled(Col)`
  ${breakpointMax('l')`
    margin-top: ${theme('spaces.m')};
    padding-top: ${theme('spaces.m')};
    order: 3;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
  `}

  ${breakpoint('l')`
    order: 1;
  `}
`

const SecondCol = styled(Col)`
  ${breakpoint('l')`
    order: 2;
  `}
`

const ThirdCol = styled(Col)`
  ${breakpoint('l')`
    order: 3;
  `}
`

const SelectWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: ${theme('spaces.s')};
  border: 0.2rem solid ${theme('colors.white')};

  ${breakpoint('m')`
    width: 60%;
  `}

  ${breakpoint('l')`
    width: 80%;
  `}

  &::after {
    position: absolute;
    display: inline-block;
    right: ${theme('spaces.s')};
    top: 50%;
    width: 0;
    height: 0;
    margin-top: calc(${theme('spaces.xs')} / -2);
    border-left: ${theme('spaces.xs')} solid transparent;
    border-right: ${theme('spaces.xs')} solid transparent;
    border-top: ${theme('spaces.xs')} solid ${theme('colors.white')};
    content: '';
  }
`

const StyledCountryMenu = styled(CountryMenu)`
  padding: ${theme('spaces.s')};
  min-width: 11rem;
  width: 100%;
  appearance: none;
  background-color: transparent;
  border: none;
  color: ${theme('colors.white')};

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
  }

  option {
    color: ${theme('colors.grayscale.darker')};
  }
`

const Baseline = styled(Paragraph)`
  display: none;
  color: ${theme('colors.white')};
  margin-top: 0;

  ${breakpoint('m')`
    display: block;
    padding-bottom: ${theme('spaces.s')};
  `}
`

const PhoneWrapper = styled.div`
  margin-top: ${theme('spaces.m')};

  &:first-child {
    margin-top: 0;
  }

  ${breakpoint('m')`
    margin-top: ${theme('spaces.l')};
  `}
`

const TitlePhone = styled(Paragraph)`
  color: ${theme('colors.white')};
  margin-bottom: ${theme('spaces.s')};
  margin-top: 0;

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.m')};
  `}
`

const StyledLinkPhone = styled(Link)`
  color: ${theme('colors.secondary')};
  font-family: ${theme('fonts.family.andesBlack')};
  font-size: ${theme('fonts.size.m')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.l')};
  `}
`

const FooterCorporate = ({ intl: { formatMessage } }) => (
  <StyledSection>
    <Grid>
      <StyledRow>
        <FirstCol xs={12} l={6}>
          <Row>
            <Col xs={5} l={6}>
              <Link to="/">
                <StyledIcon icon="logo-white-withoutsignet" />
              </Link>
              <Baseline>
                <FormattedMessage id="main.baseline" />
              </Baseline>
            </Col>
            <Col xs={7} l={6}>
              <StyledList>
                <StyledListItem>
                  <SelectWrap>
                    <StyledCountryMenu />
                  </SelectWrap>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink forceRedirect to="/contact-form.html">
                    <FormattedMessage id="footer.corporate.contact" />
                  </StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink to={`${contentSiteUrl}qui-sommes-nous`}>
                    <FormattedMessage id="footer.corporate.about" />
                  </StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink forceRedirect to="/emploi.html">
                    <FormattedMessage id="footer.corporate.job" />
                  </StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink to={`${contentSiteUrl}cgu`}>
                    <FormattedMessage id="footer.corporate.use_conditions" />
                  </StyledLink>
                </StyledListItem>
              </StyledList>
            </Col>
          </Row>
        </FirstCol>
        <SecondCol xs={6} l={3}>
          <StyledList>
            <StyledListItem>
              <StyledLink forceRedirect to={`${contentSiteUrl}`}>
                <FormattedMessage id="footer.corporate.guides" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink forceRedirect to="/annuaire-artisan">
                <FormattedMessage id="footer.corporate.directory" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink forceRedirect to={`${locales.fr_FR.proUrl}`}>
                <FormattedMessage id="footer.corporate.qpro" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink forceRedirect to="http://www.adeo.com/">
                <FormattedMessage id="footer.corporate.adeo" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink forceRedirect to="/travaux-entreprise.html">
                <FormattedMessage id="footer.corporate.quote" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink forceRedirect to="/dossiers-travaux.html">
                <FormattedMessage id="footer.corporate.folder_projects" />
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink forceRedirect to="/artisan-installateur-poseur-travaux.php">
                <FormattedMessage id="footer.corporate.trades" />
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </SecondCol>
        <ThirdCol xs={6} l={3}>
          <PhoneWrapper>
            <TitlePhone>
              <FormattedMessage id="footer.corporate.phone_help" />
            </TitlePhone>
            <StyledLinkPhone forceRedirect to={`tel:${formatMessage(messages('footer.corporate.phone_help_number').label).replace(/ /g, '')}`}>
              <Icon icon="support-phone" />
              <FormattedMessage id="footer.corporate.phone_help_number" />
            </StyledLinkPhone>
          </PhoneWrapper>
          <PhoneWrapper>
            <TitlePhone>
              <FormattedMessage id="footer.corporate.phone_pros" />
            </TitlePhone>
            <StyledLinkPhone forceRedirect to={`tel:${formatMessage(messages('footer.corporate.phone_pros_number').label).replace(/ /g, '')}`}>
              <Icon icon="support-pro" />
              <FormattedMessage id="footer.corporate.phone_pros_number" />
            </StyledLinkPhone>
          </PhoneWrapper>
        </ThirdCol>
      </StyledRow>
    </Grid>
  </StyledSection>
)

FooterCorporate.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(FooterCorporate)
