import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Section, Heading, ProjectListItem, Loading, Grid, Row } from 'components'
import { Carousel } from 'containers'

const StyledSection = styled(Section)`
  position: relative;
  min-height: 100vh;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 40%;
    width: 100%;
    background: ${theme('colors.white')};
    content: '';

    ${breakpoint('m')`
      height: 32rem;
    `}
  }
`

const StyledHeading = styled(Heading)`
  position: relative;

  ${breakpoint('l')`
    margin-bottom: ${theme('spaces.xxl')};
  `}
`

const StyledGrid = styled(Grid)`
  ${breakpoint('l')`
    max-width: 100rem;
  `}
`

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin-left: calc(${theme('spaces.l')} / -2);
    margin-right: calc(${theme('spaces.l')} / -2);

      &.qs-Carousel-Projects > div {
       width: 100%;

       > div {
        display: flex;
        flex-wrap: wrap;

        > div {
          padding: calc(${theme('spaces.l')} / 2);
          max-width: 50%;
          width: 50%;
        }
      }
    }
  `}

  ${breakpoint('l')`
    &.qs-Carousel-Projects > div > div {
      > div {
        max-width: 33.33%;
        width: 33.33%;
      }
    }
  `}
`

const StyledCarousel = styled(Carousel)`
  ${breakpointMax('m')`
    max-width: 100vw;

    .slick-list {
      padding-bottom: ${theme('spaces.m')};
    }
  `}
`

const ProjectList = ({ list, loading }) => (
  <StyledSection light>
    <StyledGrid narrow>
      <StyledHeading level={1}><FormattedMessage id="project.list.heading" /></StyledHeading>
      <Loading loading={loading && list.length === 0}>
        { list.length === 0 && <FormattedMessage id="project.list.empty" /> }
        <StyledRow className="qs-Carousel-Projects">
          <StyledCarousel
            slidesToShow={1}
            slidesToScroll={1}
            variableWidth
            infinite={false}
            dots
            responsive={[
              {
                breakpoint: 767,
                settings: {
                  swipe: true,
                },
              },
              {
                breakpoint: 10000,
                settings: 'unslick',
              },
            ]}
          >
            {list.map(items => (
              <ProjectListItem
                key={items['@id']}
                {...items}
              />
            ))}
          </StyledCarousel>
        </StyledRow>
      </Loading>
    </StyledGrid>
  </StyledSection>
)

ProjectList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool,
}

export default ProjectList
