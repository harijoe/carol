import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, ifThen } from 'utils/style'

const styles = ({ or, translate }) => css`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 1px;
  background-color: ${theme('colors.grayscale.lighter')};
  color: ${theme('colors.grayscale.medium')};

  ${ifThen(
    or,
    `
    &::before {
      content: '${translate('user.or')}';
      position: absolute;
      top: -9px;
      width: 40px;
      height: 20px;
      background-color: white;
      font-weight: bold;
    }
  `,
  )}
`

const Divider = styled.div`${styles};`

Divider.PropTypes = {
  or: PropTypes.bool,
}

export default injectTranslate(Divider)
