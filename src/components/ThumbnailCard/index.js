import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import Card from 'components/Card'
import ThumbnailPoster from 'components/ThumbnailPoster'
import List from 'components/List'

const Wrapper = styled.div`
  display: block;
  height: 100%;
  width: 13.5rem;
  margin: 0 ${theme('spaces.xs')};

  *,
  & {
    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    cursor: pointer;
  }

  ${breakpoint('m')`
    width: 20rem;
  `} ${mapBreakpoints(
      bp => css`
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
  `,
    )} ${breakpoint('xl')`
    margin-left: calc(${theme('spaces.l')} / 2);
    margin-right: calc(${theme('spaces.l')} / 2);
  `};
`

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 0 40px 0 rgba(19, 19, 19, 0.2);
    transform: translateY(-${theme('spaces.s')});
  }
`

const CardContent = styled.div`
  position: relative;
  flex-grow: 1;
  padding: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.s')};
  line-height: 1;

  ${breakpoint('m')`
    padding: ${theme('spaces.m')};
    font-size: ${theme('fonts.size.base')};
  `};
`

const StyledList = styled(List)`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;

  li {
    padding-top: ${theme('spaces.xs')};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const CardFooter = styled.footer`
  padding: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.s')};
  text-align: left;
  color: ${theme('colors.primary')};

  ${breakpoint('m')`
    padding: 0 ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.m')};
    font-size: ${theme('fonts.size.base')};
  `};
`

const ThumbnailCard = ({ image, title, items, onClick }) =>
  <Wrapper onClick={onClick}>
    <StyledCard>
      <ThumbnailPoster className="quick-reply" image={{ src: image, alt: title }} title={title} />
      {items.length > 0 &&
        <div>
          <CardContent>
            <StyledList>
              {items.map((item, i) =>
                <li key={i}>
                  {item}
                </li>,
              )}
            </StyledList>
          </CardContent>
          <CardFooter>
            <FormattedMessage id="thumbnailcard.link" />
          </CardFooter>
        </div>}
    </StyledCard>
  </Wrapper>

ThumbnailCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}

export default ThumbnailCard
