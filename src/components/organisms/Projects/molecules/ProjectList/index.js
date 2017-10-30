import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Row } from 'components'
import { Carousel } from 'containers'
import ProjectListItem from '../ProjectListItem'

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

const ProjectList = ({ list }) =>
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
      {list.map(items => <ProjectListItem key={items['@id']} {...items} />)}
    </StyledCarousel>
  </StyledRow>

ProjectList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default ProjectList
