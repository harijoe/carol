import React from 'react'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import { theme } from 'utils/style'
import { locales } from 'config'

import { List, Section } from 'components'

const styles = css`
  margin: 0;
  padding: ${theme('spaces.m')} 0;
  list-style: none;
  border-bottom: 1px solid ${theme('colors.grayscale.light')};
  border-top: 1px solid ${theme('colors.grayscale.light')};

  li{
    color: ${theme('colors.grayscale.darker')};
  }
`

const StyledList = styled(List)`${styles}`

const StyledLink = styled(Link)`
  display: block;
  padding: ${theme('spaces.m')} 0;
  color: ${theme('colors.grayscale.darker')};
  text-decoration: none;
`

const StyledSection = styled(Section)`
  width: 100%;
`

const BurgerMenu = ({ locale }) => (
  <StyledSection>
    <StyledList>
      <li>
        <StyledLink to="/">
          <FormattedMessage id="home" />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/project-elaboration">
          <FormattedMessage id="firm.find_pro" />
        </StyledLink>
      </li>
      <li>
        <StyledLink to={locales[locale].contentUrl}>
          <FormattedMessage id="firm.resource" />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/help">
          <FormattedMessage id="help" />
        </StyledLink>
      </li>
      <li>
        <StyledLink href={locales[locale].proUrl}>
          <FormattedMessage id="firm.i_am_pro" />
        </StyledLink>
      </li>
    </StyledList>
  </StyledSection>
)

BurgerMenu.propTypes = {
  locale: React.PropTypes.string,
}

export default BurgerMenu
