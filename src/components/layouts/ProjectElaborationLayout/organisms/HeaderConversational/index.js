import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import { Link, Icon, Container, Heading } from 'components'

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  background: ${theme('colors.white')};

  ${mapBreakpoints(bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}
`

const StyledHeading = styled(Heading)`
  margin: 0;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};

  ${breakpoint('m')`
    margin-left: 11rem;
  `}

  ${breakpoint('xl')`
    margin-left: 13.5rem;
  `}
`

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  display: none;
  height: 2.6rem;
  width: 9.4rem;
  z-index: 10;

  ${breakpoint('m')`
    display: block;
  `}
`

const Block = styled.div`
  box-sizing: content-box;
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
  margin-left: auto;
  padding: ${theme('spaces.xs')};
`

const StyledIcon = styled(Icon)`
  height: auto;
  width: 100%;
  margin: 0;
`

const CloseIcon = styled(Icon)`
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
`

const HeaderConversational = props => (
  <Wrapper {...props}>
    <StyledLink to="/">
      <StyledIcon icon="quotatis" />
    </StyledLink>
    <StyledHeading level={3}><FormattedMessage id="project.elaboration.title" /></StyledHeading>
    <Block>
      <Link to="/"><CloseIcon icon="close" /></Link>
    </Block>
  </Wrapper>
)

export default HeaderConversational
