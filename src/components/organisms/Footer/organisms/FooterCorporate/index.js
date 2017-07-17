import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import injectTranslate from 'i18n/hoc/injectTranslate'
import { List, ListItem, Link, Icon, Grid, Col, Row, Paragraph, Section, FooterCorporateListItem } from 'components'
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

  li {
    padding-top: ${theme('spaces.s')};
  }
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

const FooterCorporate = ({ locale, translate }) => (
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
                <FooterCorporateListItem id="contact" forceRedirect locale={locale} />
                <FooterCorporateListItem id="about" contentSite locale={locale} />
                <FooterCorporateListItem id="job" forceRedirect locale={locale} />
                <FooterCorporateListItem id="use_conditions" contentSite locale={locale} />
              </StyledList>
            </Col>
          </Row>
        </FirstCol>
        <SecondCol xs={6} l={3}>
          <StyledList>
            <FooterCorporateListItem id="guides" contentSite target="_blank" locale={locale} />
            <FooterCorporateListItem id="directory" target="_blank" locale={locale} />
            <FooterCorporateListItem id="qpro" target="_blank" locale={locale} />
            <FooterCorporateListItem id="adeo" target="_blank" locale={locale} />
            <FooterCorporateListItem id="quote" target="_blank" locale={locale} />
            <FooterCorporateListItem id="folder_projects" target="_blank" locale={locale} />
            <FooterCorporateListItem id="trades" target="_blank" locale={locale} />
            <FooterCorporateListItem id="tools" target="_blank" locale={locale} />
          </StyledList>
        </SecondCol>
        <ThirdCol xs={6} l={3}>
          <PhoneWrapper>
            <TitlePhone>
              <FormattedMessage id="footer.corporate.phone_help" />
            </TitlePhone>
            <StyledLinkPhone forceRedirect to={`tel:${translate('footer.corporate.phone_help_number').replace(/ /g, '')}`}>
              <Icon icon="support-phone" />
              <FormattedMessage id="footer.corporate.phone_help_number" />
            </StyledLinkPhone>
          </PhoneWrapper>
          <PhoneWrapper>
            <TitlePhone>
              <FormattedMessage id="footer.corporate.phone_pros" />
            </TitlePhone>
            <StyledLinkPhone forceRedirect to={`tel:${translate('footer.corporate.phone_pros_number').replace(/ /g, '')}`}>
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
  translate: PropTypes.func.isRequired,
  locale: PropTypes.string,
}

export default injectTranslate(FooterCorporate)
