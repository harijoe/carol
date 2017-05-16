import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'

import { Section, Heading, Project, Loading, Grid, Row, Col } from 'components'
import { Carousel } from 'containers'

const StyledSection = styled(Section)`
  position: relative;
  padding-top: calc(${theme('spaces.xxxl')} + ${theme('spaces.xl')});
  min-height: 100vh;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 50%;
    width: 100%;
    background: ${theme('colors.white')};
    content: '';

    ${breakpoint('m')`
      height: 37rem;
    `}
  }

  img {
    width: 100%;
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
  `}
`

const StyledCol = styled(Col)`
  position: relative;
  padding: 0;

  ${breakpoint('m')`
    padding: calc(${theme('spaces.l')} / 2);
  `}
`

const ProjectList = ({ list, loading }) => (
  <StyledSection light>
    <StyledGrid narrow>
      <StyledHeading level={1}><FormattedMessage id="project.list.heading" /></StyledHeading>
      <Loading loading={loading && list.length === 0}>
        { list.length === 0 && <FormattedMessage id="project.list.empty" /> }
        <StyledRow>
          <StyledCol xs={12} m={6} l={4}>
            <Carousel
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
              {list.map((items, i) =>
                <Project
                  key={i}
                  items={items}
                />
              )}
            </Carousel>
          </StyledCol>
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
