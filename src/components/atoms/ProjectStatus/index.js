import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint } from 'utils/style'

import { Icon } from 'components'

const styles = ({ status }) => css`
  position: absolute;
  bottom: 0;
  left: ${theme('spaces.m')};
  margin-bottom: -1.4rem;
  border-radius: 6rem;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  font-size: ${theme('fonts.size.s')};
  background: ${theme('colors.grayscale.lighter')};
  color: ${theme('colors.grayscale.dark')};
  line-height: 1;
  display: inline-block;
  z-index: 0;

  span {
    vertical-align: middle;
  }

  ${breakpoint('m')`
    left: ${theme('spaces.l')};
  `}

  ${ifThen(status === 'completion_in_progress', css`
    background-color: ${theme('colors.grayscale.lighter')};
    color: ${theme('colors.grayscale.dark')};
  `)}

  ${ifThen(status === 'to_validate', css`
    background-color: #FED289;
    color: ${theme('colors.grayscale.dark')};
  `)}

  ${ifThen(['validated', 'pending_search', 'found'].includes(status), css`
    background-color: ${theme('colors.success')};
    color: ${theme('colors.white')};

    svg .check-color1 {
      fill: ${theme('colors.white')};
    }
  `)}
`

const Wrapper = styled.div`${styles}`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
`

const ProjectStatus = ({ status, firms, translate, ...props }) => {
  let icon

  switch (status) {
    case 'pending_search':
    case 'validated':
    case 'found':
      icon = 'validated'
      break
    default:
      icon = status
  }

  return (
    <Wrapper {...{ status, ...props }}>
      <StyledIcon
        size={16}
        icon={icon}
      />
      {status === 'found' ? translate(`project.status.${status}`, { firmsNumber: firms.length }) : translate(`project.status.${status}`) }
    </Wrapper>
  )
}

ProjectStatus.propTypes = {
  translate: PropTypes.func.isRequired,
  firms: PropTypes.array,
  status: PropTypes.string,
}

export default injectTranslate(ProjectStatus)
