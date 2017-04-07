import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, LastProjectCardContent, Col, Row } from 'components'
import { PostList, GoogleMap } from 'containers'

const generateChild = (i, { title, featuredMedia, customFields }) => (
  <Card key={i}>
    <LastProjectCardContent
      title={stripTags(title)}
      image={customFields.project_bg}
      place={stripTags(customFields.project_city)}
      firmName={stripTags(customFields.project_firm)}
      firmImage={featuredMedia}
      firmTrade={stripTags(customFields.project_trade)}
    />
  </Card>
)

const StyledSection = styled(Section)`
  ${breakpoint('m')`
    padding-bottom: 0;
    height: 100%;
  `}
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap;
  flex-direction: column;

  ${breakpoint('m')`
    flex-direction: row;
    padding-top: ${theme('spaces.m')};
  `}
`

const MapWrapper = styled.div`
  height: 40vh;
  margin-left: -${theme('spaces.m')};
  margin-right: -${theme('spaces.m')};
  position: relative;
  z-index: 1;
  
  ${breakpoint('m')`
    height: auto;
    width: calc(50% + 2.5rem);
    margin-left: -${theme('spaces.l')};
    margin-right: 0;
  `}

  ${breakpoint('l')`
    width: calc(50% + 2.5rem);
    margin-left: -${theme('spaces.l')};
  `}

  ${breakpoint('xl')`
    width: calc(50% + 2.5rem);
    margin-left: -${theme('spaces.l')};
  `}
`

const StyledRow = styled(Row)`
  position: relative;
  z-index: 1;
  margin-top: -${theme('spaces.xxl')};

  ${breakpoint('m')`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin: ${theme('spaces.xxl')} 0 ${theme('spaces.xxl')} calc(-${theme('spaces.xxl')} * 3);
  `}
`

const LastProjects = ({ active, intl }) => (
  <StyledSection title={intl.formatMessage(messages('last_projects.section_title').label)} light>
    <Wrapper>
      <MapWrapper>
        <GoogleMap scope="latestProjectsOnMap" />
      </MapWrapper>
      <StyledRow>
        <Col xs={12}>
          <PostList
            scope="latestProjectsOnMap"
            tags={['api-last-project']}
            limit={3}
            active={active}
            generateChild={generateChild}
            carousel={{}}
          />
        </Col>
      </StyledRow>
    </Wrapper>
  </StyledSection>
)

LastProjects.propTypes = {
  active: PropTypes.any,
  intl: intlShape.isRequired,
}

export default injectIntl(LastProjects)
