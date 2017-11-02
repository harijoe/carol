import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme } from 'utils/style'

import { Icon, Link } from 'components'

const Wrapper = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${theme('colors.grayscale.dark')};

  transition: all 0.3s ease;

  &:hover {
    color: ${theme('colors.secondary')};

    path {
      fill: ${theme('colors.secondary')};
    }
  }
`

const StyledIcon = styled(Icon)`
  height: ${theme('icons.size.m')};
  width: ${theme('icons.size.m')};
  margin-left: ${theme('spaces.s')};

  path {
    fill: ${theme('colors.grayscale.dark')};
    transition: all 0.3s ease;
  }
`

const NewSearch = ({ translate }) =>
  <Wrapper>
    {translate('search_page.new_search')}
    <StyledIcon icon="search" />
  </Wrapper>

NewSearch.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(NewSearch)
