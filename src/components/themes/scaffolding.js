import { css } from 'styled-components'
import { assetPath } from 'config'

import andesBlackWebfontEot from './default/fonts/andes-black-webfont.eot'
import andesBlackWebfontTtf from './default/fonts/andes-black-webfont.ttf'
import andesBlackWebfontWoff from './default/fonts/andes-black-webfont.woff'
import andesBlackWebfontWoff2 from './default/fonts/andes-black-webfont.woff2'
import andesExtralightWebfontEot from './default/fonts/andes-extralight-webfont.eot'
import andesExtralightWebfontTtf from './default/fonts/andes-extralight-webfont.ttf'
import andesExtralightWebfontWoff from './default/fonts/andes-extralight-webfont.woff'
import andesExtralightWebfontWoff2 from './default/fonts/andes-extralight-webfont.woff2'

const scaffolding = theme => css`
  @font-face {
    font-family: 'andes-black';
    src:
      url('${assetPath + andesBlackWebfontEot}'),
      url('${assetPath + andesBlackWebfontTtf}?#iefix') format('embedded-opentype'),
      url('${assetPath + andesBlackWebfontWoff2}') format('woff2'),
      url('${assetPath + andesBlackWebfontWoff}') format('woff'),
      url('${assetPath + andesBlackWebfontTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'andes-extralight';
    src:
      url('${assetPath + andesExtralightWebfontEot}'),
      url('${assetPath + andesExtralightWebfontEot}?#iefix') format('embedded-opentype'),
      url('${assetPath + andesExtralightWebfontWoff2}') format('woff2'),
      url('${assetPath + andesExtralightWebfontWoff}') format('woff'),
      url('${assetPath + andesExtralightWebfontTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: ${theme.fonts.size.reset};
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: ${theme.fonts.size.base};
    line-height: 2.1rem;
    color: ${theme.colors.grayscale.darker};

    &::-webkit-scrollbar-track {
      border-radius: 6rem;
      background-color: ${theme.colors.grayscale.lightest};
    }

    &::-webkit-scrollbar {
      height: ${theme.spaces.xs};
      width: ${theme.spaces.xs};
      background-color: ${theme.colors.grayscale.lightest};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6rem;
      background-color: ${theme.colors.grayscale.light};
    }

    @media (max-width: 768px) {
      &.noscroll {
        overflow: hidden;
      }
    }
  }

  abbr[title],
  abbr[data-original-title] {
    cursor: help;
  }

  [hidden] {
    display: none !important;
  }

  [tabindex="-1"]:focus {
    outline: none !important;
  }

  button {
    border: 0;
    outline: 0;
  }
  
  .no-scroll {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
  }
  
  div.__react_component_tooltip.show {
    opacity: 1;
  }
  
`

export default scaffolding
