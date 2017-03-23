import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'

import { Card, ThumbnailPoster, Link, List, Icon } from 'components'

const Wrapper = styled(Link)`
  display: block;
  width: 11.2rem;
  margin: 0 ${theme('spaces.xs')};

  *, & {
    &:hover {
      text-decoration: none;
    }
  }
`

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.2);
    transform: translateY(-${theme('spaces.xs')});
  }
`

const CardContent = styled.div`
  position: relative;
  padding: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.s')};
  line-height: 1;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: -1.1rem;
  right: ${theme('spaces.s')};
  display: block;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 6rem;
  border: 2px solid ${theme('colors.white')};
  background-color: ${theme('colors.white')};
  z-index: 1;
`

const StyledList = styled(List)`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding-top: ${theme('spaces.s')};
  }
`

const StyledParagraph = styled.p`
  margin: ${theme('spaces.s')} 0 0 0;
  color: ${theme('colors.primary')};
`

const ThumbnailCard = ({ link, image, title, items, icon }) => (
  <Wrapper to={link}>
    <StyledCard>
      <ThumbnailPoster image={image} title={title} />
      <CardContent>
        <StyledIcon icon={icon} />
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
  icon: PropTypes.string,
}

export default ThumbnailCard
