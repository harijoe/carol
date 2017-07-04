import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import { Icon, Link, MainWrapper, Heading, QuotatisLogo } from 'components'

const Wrapper = styled(MainWrapper)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.6rem;

  ${mapBreakpoints(bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-top: 0;
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

const Block = styled.div`
  box-sizing: content-box;
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
  margin-left: auto;
  padding: ${theme('spaces.xs')};
`

const CloseIcon = styled(Icon)`
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
`
const LogoWrapper = styled.div`
  display: none;

  ${breakpoint('m')`
    display: block;
  `}
`

const HeaderConversational = props => (
  <Wrapper {...props}>
    <LogoWrapper>
      <QuotatisLogo />
    </LogoWrapper>
    <StyledHeading level={3}><FormattedMessage id="project.elaboration.title" /></StyledHeading>
    <Block>
      <Link to="/"><CloseIcon icon="close" /></Link>
    </Block>
  </Wrapper>
)

export default HeaderConversational
