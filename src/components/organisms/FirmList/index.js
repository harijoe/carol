import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Firm, Loading, Link, Grid, Row, Card, Carousel, Heading, Paragraph } from 'components'

const Wrapper = styled.div`
  margin-top: 200px;
  & > * {
    margin: 1em;
  }
`

const StyledCard = styled(Card)`
  ${breakpoint('xs')`
    width: calc(100vw - 4.8rem);
    margin-left: calc(${theme('spaces.m')} / 2);
    margin-right: calc(${theme('spaces.m')} / 2);
  `}

  ${breakpoint('m')`
    width: 30rem;
    margin-left: calc(${theme('spaces.l')} / 2);
    margin-right: calc(${theme('spaces.l')} / 2)
  `}

  width: calc(100vw - 4.8rem);
  height: 100%;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
`

const CarouselWrapper = styled.div`
  .carousel-item {
    display: inline-block;
    vertical-align: top;
  }
  
  .carousel-item li {
    list-style: none;
  }
  
`

const FirmList = ({ list, loading }) => (
  <Wrapper>
    <Loading {...{ loading }}>
      <Grid>
        <Row>
          <Link to="/project-elaboration"><FormattedMessage id="project.modify_my_project" /></Link><br />
          <Heading level={1}><FormattedMessage id="firm.good_news" /></Heading><br />
          <Paragraph>{list.length} <FormattedMessage id="firm.result_description" /></Paragraph>
          <CarouselWrapper>
            <Carousel
              itemProps={{ className: 'carousel-item' }}
              responsive={[
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                    swipe: true,
                    slidesToScroll: 2,
                    dots: false,
                  },
                },
                {
                  breakpoint: 991,
                  settings: {
                    arrows: true,
                    swipe: true,
                  },
                },
                {
                  breakpoint: 3000,
                  settings: 'unslick',
                },
              ]}
            >
              {list.map((items, i) =>
                <StyledCard key={i}>
                  <span>{i + 1}/{list.length}</span>
                  <Firm {...items} />
                </StyledCard>
              )}
            </Carousel>
          </CarouselWrapper>
        </Row>
      </Grid>
    </Loading>
  </Wrapper>
)

FirmList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
}

export default FirmList
