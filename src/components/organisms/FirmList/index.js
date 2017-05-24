import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Firm, Loading, Link, Row, Card, Carousel, Heading, Paragraph, Icon, Grid } from 'components'
import { FirmAcceptButton } from 'containers'

const StyledCard = styled(Card)`
  position: relative;
  height: 100%;
  width: 100%;

  ${breakpointMax('m')`
    width: calc(100vw - ${theme('spaces.xl')} - ${theme('spaces.m')});
    margin-left: ${theme('spaces.s')};
    margin-right: ${theme('spaces.s')};
  `}
`

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin-left: calc(${theme('spaces.l')} / -2);
    margin-right: calc(${theme('spaces.l')} / -2);
    order: 3;
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
      margin-top: ${theme('spaces.l')};
      margin-left: ${theme('spaces.l')};
      margin-right: ${theme('spaces.l')};

      > div {
        display: flex;
        flex-wrap: wrap;

        > div {
          max-width: 50%;
          width: 100%;
          padding: calc(${theme('spaces.l')} / 2);
        }
      }
    }
  `}

  ${breakpoint('l')`
    > div > div > div {
      max-width: 33.33%;
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

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
  `}
`

const FirmList = ({ list, loading, projectId }) => (
  <Loading {...{ loading }}>
    <StyledLink to="/project-elaboration">
      <StyledIcon icon="back" />
      <FormattedMessage id="project.modify_my_project" />
    </StyledLink>
    <Grid narrow>
      <Heading level={1}><FormattedMessage id={`firm.list.${list.length > 1 ? 'good_news' : 'thank_you'}`} /></Heading>
      <StyledParagraph>
        <strong>{list.length}</strong>&nbsp;
        <FormattedMessage id={`firm.list.${list.length > 1 ? 'has_results' : 'no_results'}`} />
      </StyledParagraph>
    </Grid>
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
            breakpoint: 10000,
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
    <FirmAcceptButton projectId={projectId} />
  </Loading>
)

FirmList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
  projectId: PropTypes.string,
}

export default FirmList
