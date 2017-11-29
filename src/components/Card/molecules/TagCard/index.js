import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'

import Tag from 'components/Tag'

const styles = ({ position, type, themeColor }) => css`
  margin: 0;
  padding: 0.4rem 1.6rem;
  
  ${ifThen(position === 'bottom',
    css`
      position: absolute;
      bottom: ${theme('spaces.s')};
    `,
  )}

  ${ifThen(position === 'above',
    css`
      position: absolute;
      bottom: -1.4rem;
    `,
  )}

  ${ifThen(
    type === 'faq',
    css`
    background-color: ${theme('colors.content.faq')};
    color: ${theme('colors.white')};
  `,
  )}

  ${ifThen(
    type === 'guide',
    css`
    background-color: ${theme('colors.white')};
    color: ${theme('colors.grayscale.darker')};
  `,
  )}
  
  ${ifThen(
    type === 'inspirations',
    css`
    background-color: ${themeColor};
    color: ${theme('colors.white')};
  `,
  )}
  
`
const StyledImg = styled.img`
  height: ${theme('icons.size.xs')};
  margin-right: ${theme('spaces.xs')};
  
`

const StyledTag = styled(Tag)`${styles}`

const TagCard = ({ className, themeInspirations, themeIconUrl, ...props }) =>
  <StyledTag className={`qs-Card-tag ${className}`} label={<div><StyledImg src={themeIconUrl} /><span>{themeInspirations}</span></div>} {...props} />

TagCard.propTypes = {
  position: PropTypes.oneOf(['bottom', 'above']),
  type: PropTypes.oneOf(['faq', 'guide', 'inspirations']),
  className: PropTypes.string,
  themeInspirations: PropTypes.string.isRequired,
  themeColor: PropTypes.string,
  themeIconUrl: PropTypes.string,
}

export default TagCard
