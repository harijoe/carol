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
            <StyledLink to={`${contentSiteUrl}guide/fenetres-portes-volets/fenetre/`}>
              <FormattedMessage id="footer.advices.window" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/fenetres-portes-volets/volets/`}>
              <FormattedMessage id="footer.advices.shutter" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/isolation/isolation-des-combles/`}>
              <FormattedMessage id="footer.advices.roof_insulation" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/chauffage-au-bois/`}>
              <FormattedMessage id="footer.advices.wood_heating" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/pompe-a-chaleur/`}>
              <FormattedMessage id="footer.advices.heat_pumps" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/le-chauffage-solaire/`}>
              <FormattedMessage id="footer.advices.solar_heating" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/chauffage-gaz-fioul/`}>
              <FormattedMessage id="footer.advices.heating_gas_oil" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/chauffage-electrique/`}>
              <FormattedMessage id="footer.advices.electric_heating" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/cheminee-poele/`}>
              <FormattedMessage id="footer.advices.fireplaces" />
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledCol>
      <StyledCol xs={6} m={3}>
        <StyledList>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/emetteurs-de-chaleur/`}>
              <FormattedMessage id="footer.advices.heat_emitters" />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={`${contentSiteUrl}guide/chauffage/production-deau-chaude-sanitaire/`}>
              <FormattedMessage id="footer.advices.domestic_hot_water_production" />
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
