import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import { Icon, Link, Image, MainWrapper, Heading, QuotatisLogo } from 'components'

const Wrapper = styled(MainWrapper)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.6rem;

  ${mapBreakpoints(
    bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-top: 0;
  `,
  )}
`

const StyledHeading = styled(Heading)`
  margin: 0;
  font-weight: bold;
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
  `};
`

const StyledPartnerLogo = styled(Image)`
  height: 40px;
  margin-left: 10px;
`

const HeaderConversational = ({ partnerHeaderLink, partnerHeaderText, ...props }) => {
  const heading = partnerHeaderText || <FormattedMessage id="project.elaboration.title" />

  return (
    <Wrapper {...props}>
      <LogoWrapper>
        <QuotatisLogo />
      </LogoWrapper>
      <StyledHeading level={3}>
        {heading}
      </StyledHeading>
      {partnerHeaderLink && <StyledPartnerLogo src={partnerHeaderLink} />}
      <Block>
        <Link to="/">
          <CloseIcon icon="close" />
        </Link>
      </Block>
    </Wrapper>
  )
}

HeaderConversational.propTypes = {
  partnerHeaderLink: PropTypes.string,
  partnerHeaderText: PropTypes.string,
}

export default HeaderConversational
