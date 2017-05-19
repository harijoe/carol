import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Firm, Loading, Link, Row, Card, Carousel, Heading, Paragraph, Icon } from 'components'

const StyledCard = styled(Card)`
  position: relative;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;

  ${breakpoint('xs')`
    height: 100%;
    width: calc(100vw - 4.8rem);
    margin: calc(${theme('spaces.m')} / 2);
  `}

  ${breakpoint('m')`
    height: auto;
    width: 30rem;
    margin: calc(${theme('spaces.l')} / 2);
  `}
`

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin-left: calc(${theme('spaces.l')} / -2);
    margin-right: calc(${theme('spaces.l')} / -2);
  `}

  .slick-list {
    padding-bottom: ${theme('spaces.xl')};
    padding-top: ${theme('spaces.xl')};
    width: 100vw;
  }

  .slick-dots {
    max-width: 32rem;
  }

  ${breakpoint('m')`
    > div {
      width: 100%;
      margin-top: ${theme('spaces.xxl')};

      > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `}
`

const NumberOfList = styled(Paragraph)`
  position: absolute;
  right: 0;
  top: -${theme('spaces.m')};

  ${breakpoint('m')`
    display: none;
  `}
`

const StyledLink = styled(Link)`
  position: absolute;
  top: -4rem;
  right: 0;
  display: inline-block;
  line-height: 1;
  color: ${theme('colors.grayscale.dark')};
`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
`

const StyledParagraph = styled(Paragraph)`
  strong {
    font-family: ${theme('fonts.family.montserratBold')};
    font-weight: normal;
    color: ${theme('colors.primary')};
  }
`

const FirmList = ({ list, loading }) => (
  <Loading {...{ loading }}>
    <StyledLink to="/project-elaboration">
      <StyledIcon icon="back" />
      <FormattedMessage id="project.modify_my_project" />
    </StyledLink>
    <Heading level={1}><FormattedMessage id="firm.good_news" /></Heading>
    <StyledParagraph>
      <strong>{list.length}</strong>&nbsp;
      <FormattedMessage id="firm.result_description" />
    </StyledParagraph>
    <StyledRow>
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth
        infinite={false}
        dots
        swipe
        responsive={[
          {
            breakpoint: 575,
            settings: {
              arrows: false,
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
            <NumberOfList><b>{i + 1}</b>/{list.length}</NumberOfList>
            <Firm {...items} />
          </StyledCard>
        )}
      </Carousel>
    </StyledRow>
  </Loading>
)

FirmList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
}

export default FirmList
