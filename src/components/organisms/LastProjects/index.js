import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, LastProjectCardContent, Col, Row, Grid } from 'components'
import { PostList, GoogleMap } from 'containers'

const StyledCard = styled(Card)`
  ${mapBreakpoints(bp => css`
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
  `)}

  min-height: 20rem;
  width: calc(100vw - 4.8rem);
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
`

const generateChild = (i, { title, featuredMedia, customFields }) => (
  <StyledCard key={i}>
    <LastProjectCardContent
      title={stripTags(title)}
      image={customFields.project_bg}
      place={stripTags(customFields.project_city)}
      firmName={stripTags(customFields.project_firm)}
      firmImage={featuredMedia}
      firmTrade={stripTags(customFields.project_trade)}
    />
  </StyledCard>
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
      <Grid>
        <StyledRow>
          <Col xs={12}>
            <PostList
              scope="latestProjectsOnMap"
              tags={['api-last-project']}
              limit={3}
              active={active}
              generateChild={generateChild}
              carousel={{
                infinite: true,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }}
            />
          </Col>
        </StyledRow>
      </Grid>
    </Wrapper>
  </StyledSection>
)

LastProjects.propTypes = {
  active: PropTypes.any,
  intl: intlShape.isRequired,
}

export default injectIntl(LastProjects)
