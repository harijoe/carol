import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import isTouchDevice from 'utils/isTouchDevice'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import Row from 'components/Row'
import Carousel from 'containers/Carousel'
import FirmListItem from './containers/FirmListItem'

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin-left: 0;
  `} ${breakpoint('xl')`
    left: 0;
    margin-left: -${theme('spaces.xxl')};
    width: 120rem;
  `};
`

const StyledCarousel = styled(Carousel)`
  padding: 0;
  width: 100vw;

  .slick-slider {
    overflow: hidden;
  }

  ${breakpointMax('m')`
    .slick-track {
      height: 44rem;
    }
  `} ${breakpoint('xl')`
    margin: 0;
    max-width: 120rem;

    .slick-list {
      padding-left: calc( 6.5rem + calc( ${theme('spaces.l')} - 1.3rem ) );
    }
  `};
`

const StyledReactTooltip = styled(ReactTooltip)`
  max-width: 30rem;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
`

const FirmList = ({ list, projectId }) => (
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
      {list.map(items => <FirmListItem key={items['@id']} projectId={projectId} {...items} />)}
    </StyledCarousel>
    {!isTouchDevice() && <StyledReactTooltip type={'light'} effect={'solid'} />}
  </StyledRow>
)

FirmList.propTypes = {
  list: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
}

export default FirmList
