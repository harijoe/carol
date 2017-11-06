import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'

import { Tag } from 'components'

const styles = ({ position, type }) => css`
  margin: 0;

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
`

const StyledTag = styled(Tag)`${styles}`

const TagCard = ({ className, label, ...props }) =>
  <StyledTag className={`qs-Card-tag ${className}`} label={label} {...props} />

TagCard.propTypes = {
  position: PropTypes.oneOf(['bottom', 'above']),
  type: PropTypes.oneOf(['faq', 'guide']),
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default TagCard
