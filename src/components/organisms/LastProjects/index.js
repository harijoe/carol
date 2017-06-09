import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, LastProjectCardContent, Grid } from 'components'
import { PostList, GoogleMap } from 'containers'

import getImageURL from 'utils/wpImage'

const StyledCard = styled(Card)`
  min-height: 20rem;
  max-width: 30rem;
  height: 100%;

  ${breakpoint('xs')`
    width: calc(100vw - 4.8rem);
    margin-left: calc(${theme('spaces.m')} / 2);
    margin-right: calc(${theme('spaces.m')} / 2);
  `}

  ${breakpoint('m')`
    margin-left: calc(${theme('spaces.l')} / 2);
    margin-right: calc(${theme('spaces.l')} / 2);
  `}
`

const generateChild = (i, { title, featuredMedia, customFields }) => (
  <StyledCard key={i}>
    <LastProjectCardContent
      title={stripTags(title)}
      image={getImageURL(customFields.project_bg, '300x300')}
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
  `}
`

const StyledGrid = styled(Grid)`
  position: relative;
  min-height: 50vh;

  ${breakpoint('m')`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    height: 50rem;
  `}
`

const MapWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 40vh;
  width: 100%;

  ${breakpoint('m')`
    bottom: 0;
    height: 100%;
    width: 50%;
  `}
`

const ProjectsWrapper = styled.div`
  padding-top: 30vh;
  .slick-list {
    padding-top: ${theme('spaces.m')};
    padding-bottom: ${theme('spaces.m')};
  }

  .slick-active > div {
    box-shadow: 0 0 20px rgba(19, 19, 19, 0.1);
  }

  ${breakpoint('m')`
    padding-top: 0;
    margin-left: 45%;
    width: 55%;

    .slick-list {
      padding-left: 0;
    }

    .slick-dots {
      width: 30rem;
    }
  `}
`

const LastProjects = ({ intl }) => (
  <StyledSection title={intl.formatMessage(messages('last_projects.section_title').label)} light>
    <StyledGrid fluid>
      <MapWrapper>
        <GoogleMap scope="latestProjectsOnMap" />
      </MapWrapper>
      <ProjectsWrapper>
        <PostList
          scope="latestProjectsOnMap"
          tags={['api-last-project']}
          limit={3}
          generateChild={generateChild}
          carousel={{
            variableWidth: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: false,
            dots: true,
            responsive: [{ breakpoint: 767 }, { breakpoint: 10000, settings: { arrows: true } }],
          }}
        />
      </ProjectsWrapper>
    </StyledGrid>
  </StyledSection>
)

LastProjects.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(LastProjects)
