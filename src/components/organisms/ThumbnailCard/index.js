import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'

import { Card, ThumbnailPoster, List } from 'components'

const Wrapper = styled.div`
  display: block;
  width: 11.2rem;
  margin: 0 ${theme('spaces.xs')};

  *,
  & {
    &:hover {
      text-decoration: none;
    }
  }

  ${breakpoint('m')`
    width: 20rem;
    margin: 0 ${theme('spaces.s')};
  `}
`

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 0 40px 0 rgba(19, 19, 19, 0.2);
    transform: translateY(-${theme('spaces.s')});
  }

  ${breakpoint('m')`
    height: 35rem;
  `}
`

const CardContent = styled.div`
  position: relative;
  padding: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.s')};
  line-height: 1;
`

const StyledList = styled(List)`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding-top: ${theme('spaces.s')};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const StyledParagraph = styled.p`
  margin: ${theme('spaces.s')} 0 0 0;
  color: ${theme('colors.primary')};
`

const ThumbnailCard = ({ link, image, title, items, onClick }) => (
  <Wrapper to={link} onClick={onClick}>
    <StyledCard>
      <ThumbnailPoster image={image} title={title} />
      <CardContent>
        <StyledList>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </StyledList>
        <StyledParagraph>
          <FormattedMessage id="thumbnailcard.link" />
        </StyledParagraph>
      </CardContent>
    </StyledCard>
  </Wrapper>
)

ThumbnailCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}

export default ThumbnailCard
