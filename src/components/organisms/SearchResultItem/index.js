import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { ThumbnailPoster, Link, Icon, Tag } from 'components'

const StyledThumbnailPoster = styled(ThumbnailPoster)`
  transform: translateY(0);
  transition: all 0.3s ease;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);

  &::before {
    transition: all 0.3s ease;
  }

  h3 {
    margin-bottom: 0;
    transform: translateY(0);
    transition: all 0.6s 0.1s ease;
  }

  em {
    color: ${theme('colors.white')};
    background-color: ${theme('colors.primary')};
    font-style: normal;
  }

  &:hover {
    cursor: pointer;
    
    ${breakpoint('xl')`
      box-shadow: 4px 10px 40px 0 rgba(19, 19, 19, 0.4);

      &, h3 {
        margin-bottom: 0;
        transform: translateY(-${theme('spaces.l')});
      }

      &::before {
        background: ${theme('colors.primary')};
        opacity: 0.85;
      }

      .qs-icon {
        margin-bottom: 0;
        opacity: 1;
        transform: translateY(-${theme('spaces.m')});
      }
    `};
  }
`

const StyledIcon = styled(Icon)`
  position: relative;
  z-index: 2;
  height: ${theme('icons.size.xxl')};
  width: ${theme('icons.size.xxl')};
  margin-top: ${theme('spaces.m')};
  margin-bottom: -6.4rem;
  opacity: 0;
  transform: translateY(150%);
  transition: all 0.6s 0.1s ease;
`

const WrapperTag = styled.div`
  position: absolute;
  z-index: 10;
  left: ${theme('spaces.s')};
  bottom: ${theme('spaces.s')};
`

const StyledTag = styled(Tag)`
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
`

const SearchResultItem = ({ className, slug, image, alt, title, tag }) =>
  <Link className={className} to={`/project-elaboration?slug=${slug}`}>
    <StyledThumbnailPoster
      image={{ src: image, alt }}
      title={title}
      height="m"
      className="result"
    >
      <StyledIcon icon="circle-arrow" className="qs-icon" />
      {tag && (
        <WrapperTag>
          <StyledTag label={tag} />
        </WrapperTag>
      )}
    </StyledThumbnailPoster>
  </Link>

SearchResultItem.propTypes = {
  className: PropTypes.string,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  tag: PropTypes.string,
}

export default SearchResultItem
