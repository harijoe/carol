import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpoint, breakpointMax } from 'utils/style'
import { locales } from 'config'
import injectScroll from 'hoc/component/injectScroll'

import List from 'components/List'
import Link from 'components/Link'
import ListItemWithSubmenu from 'components/ListItemWithSubmenu'
import FirmResourceSubMenu from './molecules/FirmResourceSubMenu'
import FindAProLink from './containers/FindAProLink'

const StyledList = styled(List)`${({ transparent, atTop }) => css`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    position: relative;
    padding: 0;
    padding-top: 0.4rem;
    color: ${theme('colors.black')};

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      width: 100%;
      content: '';
      background-color: ${theme('colors.primary')};
      transform: scale(0);
      transform-origin: 50%;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scale(1);
    }

    &:first-child {
      padding-top: 0.4rem;
    }

    ${breakpointMax('l')`
      &:first-child {
        margin-bottom: ${theme('spaces.m')};
        border-bottom: 0.1rem solid ${theme('colors.grayscale.light')};

        > a, > [role="link"] {
          display: flex;
          align-items: center;
          font-weight: bold;
        }
      }
    `}

    ${breakpoint('l')`
      ${ifThen(
        atTop && transparent,
        css`
        &::after {
          background-color: ${theme('colors.white')};
        }

        > a, > [role="link"] {
          color: ${theme('colors.white')};

          &:hover {
            color: ${theme('colors.white')};
          }

          &.qs-linkMenu--toggle::after {
            border-top-color: ${theme('colors.white')};

            &:hover {
              border-top-color: ${theme('colors.white')};
            }
          }
        }
      `,
      )}

      ${ifThen(
        !atTop,
        css`
        &::after {
          background-color: ${theme('colors.primary')};
        }

        > a, > [role="link"] {
          color: ${theme('colors.black')};

          &:hover {
            color: ${theme('colors.primary')};
          }
        }
      `,
      )}
    `}
  }

  @media screen and (max-width: 991px) and (min-width: 768px) {
    padding: ${theme('spaces.l')};
    height: 100%;
    width: 70%;
    background-color: ${theme('colors.white')};
    box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.5);
  }

  ${breakpoint('l')`
    flex-direction: row;
    }
  `}
`}`

const linkStyle = css`
  display: inline-block;
  color: ${theme('colors.black')};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme('colors.primary')};
  }

  ${breakpointMax('l')`
    padding-bottom: ${theme('spaces.m')};
    padding-top: ${theme('spaces.m')};
  `}

  ${breakpoint('l')`
    font-weight: bold;
    font-size: ${theme('fonts.size.s')};
    padding: ${theme('spaces.m')};
  `}

  ${breakpoint('xl')`
    padding-left: ${theme('spaces.l')};
    padding-right: ${theme('spaces.l')};
    font-size: ${theme('fonts.size.base')};
  `}

  &.qs-linkMenu--toggle {
    position: relative;
    padding-right: calc(${theme('spaces.m')} + 1.4rem);

    ${breakpoint('xl')`
      padding-right: calc(${theme('spaces.l')} + 1.4rem);
    `}

    &::after {
      position: absolute;
      right: 1.4rem;
      top: 50%;
      margin-top: -0.2rem;
      margin-left: -0.2rem;
      width: 0;
      height: 0;
      border-left: 0.4rem solid transparent;
      border-right: 0.4rem solid transparent;
      border-top: 0.4rem solid ${theme('colors.black')};
      content: '';

      ${breakpoint('xl')`
        right: 2.05rem;
     `}
    }

    &:hover::after {
      border-top-color: ${theme('colors.primary')};
    }
  }

  &.qs-linkMenu-pro {
    span:first-child {
      font-weight: normal;
    }
  }
`

const StyledLink = styled(Link)`${linkStyle}`
const StyledFindAProLink = styled(FindAProLink)`${linkStyle}`

const MainMenu = ({ locale, isLandingPage, atTop }) =>
  <StyledList transparent={isLandingPage} atTop={atTop}>
    <li key="firm.find_pro">
      <StyledFindAProLink />
    </li>
    <ListItemWithSubmenu key="firm.resource" id="firm.resource" linkStyle={linkStyle} transparent={isLandingPage}>
      {Object.keys(locales[locale].mainMenu.resource).map(submenu =>
        <FirmResourceSubMenu key={submenu} locale={locale} submenu={submenu} />,
      )}
    </ListItemWithSubmenu>
    {locale !== 'es-ES' && <li key="directory">
      <StyledLink to={locales[locale].mainMenu.directory} forceRedirect target="_blank">
        <FormattedMessage id="directory" />
      </StyledLink>
    </li>}
    <li key="firm.i_am_pro.one">
      <StyledLink to={locales[locale].mainMenu.proUrl} className="qs-linkMenu-pro" target="_blank">
        <FormattedMessage id="firm.i_am_pro.one" /> <FormattedMessage id="firm.i_am_pro.two" />
      </StyledLink>
    </li>
  </StyledList>

MainMenu.propTypes = {
  locale: PropTypes.string,
  isLandingPage: PropTypes.bool,
  atTop: PropTypes.bool,
}

export default injectScroll(MainMenu)
