import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Row, FirmListItem } from 'components'
import { Carousel } from 'containers'

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin-left: 0;
  `}

  ${breakpoint('xl')`
    left: 0;
    margin-left: -${theme('spaces.xxl')};
    width: 120rem;
  `}
`

const StyledCarousel = styled(Carousel)`
  padding: 0;
  width: 100vw;

  .slick-slider {
    overflow: hidden;
  }

  ${breakpoint('xl')`
    margin: 0;
    max-width: 120rem;

    .slick-list {
      padding-left: calc( ${theme('spaces.xxxl')} + calc( ${theme('spaces.l')} - 1.3rem ) );
    }
  `}
`

const FirmList = ({ list }) => (
  <StyledRow className="qs-Carousel-Firms">
    <StyledCarousel
      variableWidth
      infinite={false}
      dots
      responsive={[
        { breakpoint: 767, settings: { slidesToShow: 1 } },
        { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 10000, settings: { slidesToShow: 3, slidesToScroll: 3, arrows: true } },
      ]}
    >
      {list.map(items => (
        <FirmListItem
          key={items['@id']}
          {...items}
        />
      ))}
    </StyledCarousel>
  </StyledRow>
)

FirmList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default FirmList
