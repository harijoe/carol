import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import messages from 'utils/messages'
import { contentSiteUrl } from 'config'

import { Section, List, ListItem, Link, Col, Row } from 'components'

const StyledRow = styled(Row)`
  width: 100%;
  color: ${theme('colors.white')};
`

const StyledList = styled(List)`
  padding: 0;
  margin: 0;
  color: ${theme('colors.white')};
  text-decoration: none;
  list-style-type: none;
`

const StyledLink = styled(Link)`
  color: ${theme('colors.white')};
  text-decoration: none;
`

const StyledListItem = styled(ListItem)`
  margin: 0;
  padding-left: 0;
  padding-bottom: ${theme('spaces.s')};
`

const StyledCol = styled(Col)`
  ${breakpoint('m')`
    width: 25%;
  `}
`

const StyledSection = styled(Section)`
  ${breakpoint('m')`
    padding-top: ${theme('spaces.xxl')};
    padding-bottom: ${theme('spaces.xxl')};
  `}
`

const FooterAdvices = ({ intl: { formatMessage } }) => (
  <StyledSection dark title={formatMessage(messages('footer.advices.section_title').label)} >
    <StyledRow>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/fenetres-portes-volets/`} target="_blank">
              <FormattedMessage id="footer.advices.window" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/`} target="_blank">
              <FormattedMessage id="footer.advices.heat" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.air" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.outside" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.wall" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.ground" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.roof" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/isolation/`} target="_blank">
              <FormattedMessage id="footer.advices.insulation" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.plumbing" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.masonry" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.renovation" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.bathroom" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.kitchen" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>
              <FormattedMessage id="footer.advices.wellness" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
    </StyledRow>
  </StyledSection>
)

FooterAdvices.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(FooterAdvices)
