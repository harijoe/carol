import { css } from 'styled-components'
import { assetPath } from 'config'

import andesBlackWebfontWoff from './default/fonts/andes-black-webfont.woff'
import andesBlackWebfontWoff2 from './default/fonts/andes-black-webfont.woff2'
import andesExtralightWebfontWoff from './default/fonts/andes-extralight-webfont.woff'
import andesExtralightWebfontWoff2 from './default/fonts/andes-extralight-webfont.woff2'
import montserratBoldWebfontWoff from './default/fonts/montserrat-bold-webfont.woff'
import montserratBoldWebfontWoff2 from './default/fonts/montserrat-bold-webfont.woff2'
import montserratLightWebfontWoff from './default/fonts/montserrat-light-webfont.woff'
import montserratLightWebfontWoff2 from './default/fonts/montserrat-light-webfont.woff2'

const scaffolding = theme => css`
  @font-face {
    font-family: 'andes-black';
    src:
      url('${assetPath + andesBlackWebfontWoff2}') format('woff2'),
      url('${assetPath + andesBlackWebfontWoff}') format('woff'),
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'andes-extralight';
    src:
      url('${assetPath + andesExtralightWebfontWoff2}') format('woff2'),
      url('${assetPath + andesExtralightWebfontWoff}') format('woff'),
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'montserrat';
    src:
      url('${assetPath + montserratLightWebfontWoff2}') format('woff2'),
      url('${assetPath + montserratLightWebfontWoff}') format('woff'),
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'montserrat';
    src:
      url('${assetPath + montserratBoldWebfontWoff2}') format('woff2'),
      url('${assetPath + montserratBoldWebfontWoff}') format('woff'),
    font-weight: bold;
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
    font-family: 'montserrat', sans-serif;
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

  /* Animations */
  @keyframes bounceIn {
    from, 20%, 40%, 60%, 80%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);

    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      transform: scale3d(1, 1, 1);
    }

    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`

export default scaffolding
