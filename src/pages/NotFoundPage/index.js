import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme } from 'utils/style'

import Heading from 'components/Heading'
import Link from 'components/Link'
import MinimalPageTemplate from 'templates/MinimalPageTemplate'

const Wrapper = styled.div`
  display: flex;
  padding: ${theme('spaces.m')};
  height: 100vh;
  background-color: ${theme('colors.primary')};
`

const StyledHeading = styled(Heading)`
  width: 100%;
  text-align: center;
  margin: ${theme('spaces.l')} auto;
  font-family: ${theme('fonts.family.andesLight')};
  color: ${theme('colors.white')};
`

const ContentBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  width: 100%;
  margin: auto;
`

const StyledLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  max-width: 32rem;
`

const NotFoundPage = ({ ...props }) =>
  <MinimalPageTemplate {...props}>
    <Wrapper>
      <ContentBlock>
        <StyledHeading level={1}>
          <FormattedMessage id="404.title" />
        </StyledHeading>
        <StyledHeading level={2}>
          <FormattedMessage id="404.message" />
        </StyledHeading>
        <StyledLink to="/" button>
          <FormattedMessage id="404.call_to_action" />
        </StyledLink>
      </ContentBlock>
    </Wrapper>
  </MinimalPageTemplate>

export default NotFoundPage
