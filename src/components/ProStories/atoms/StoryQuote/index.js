import styled from 'styled-components'
import cloudinary from 'utils/cloudinary'
import { theme, breakpoint } from 'utils/style'

const StoryQuote = styled.blockquote`
  width: 100%;
  margin: 0;
  margin-bottom: ${theme('spaces.l')};
  padding-bottom: ${theme('spaces.l')};
  align-self: flex-end;
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.l')};
  line-height: 1.25;
  color: ${theme('colors.white')};

  &::before, &::after {
    display: inline-block;
    width: 24px;
    height: 20px;
    background: url(${cloudinary('/icons/quote_icon.svg')}) no-repeat 0 0;
    background-size: contain;
    content: '';

    ${breakpoint('m')`
      width: 39px;
      height: 29px;
    `}
  }

  &::before {
    margin-right: ${theme('spaces.s')};

    ${breakpoint('m')`
      margin-right: ${theme('spaces.l')};
    `}
  }

  &::after {
    margin-bottom: -10px;
    margin-left: ${theme('spaces.s')};
    vertical-align: bottom;
    transform: rotate(180deg);

    ${breakpoint('m')`
      margin-bottom: -15px;
      margin-left: ${theme('spaces.l')};
    `}
  }

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xl')};
    margin-right: ${theme('spaces.xxl')};
    padding-bottom: ${theme('spaces.xxl')};
    font-size: ${theme('fonts.size.xl')};
  `}

  ${breakpoint('l')`
    margin-bottom: ${theme('spaces.xxxl')};
  `}

  ${breakpoint('xl')`
    width: 575px;
  `}
`

export default StoryQuote
