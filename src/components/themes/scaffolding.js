import { css } from 'styled-components'

import andesBlackWebfontEot from './default/fonts/andes-black-webfont.eot'
import andesBlackWebfontTtf from './default/fonts/andes-black-webfont.ttf'
import andesBlackWebfontWoff from './default/fonts/andes-black-webfont.woff'
import andesBlackWebfontWoff2 from './default/fonts/andes-black-webfont.woff2'
import andesExtralightWebfontEot from './default/fonts/andes-extralight-webfont.eot'
import andesExtralightWebfontTtf from './default/fonts/andes-extralight-webfont.ttf'
import andesExtralightWebfontWoff from './default/fonts/andes-extralight-webfont.woff'
import andesExtralightWebfontWoff2 from './default/fonts/andes-extralight-webfont.woff2'
import montserratBlackWebfontEot from './default/fonts/montserrat-black-webfont.eot'
import montserratBlackWebfontTtf from './default/fonts/montserrat-black-webfont.ttf'
import montserratBlackWebfontWoff from './default/fonts/montserrat-black-webfont.woff'
import montserratBlackWebfontWoff2 from './default/fonts/montserrat-black-webfont.woff2'
import montserratBoldWebfontEot from './default/fonts/montserrat-bold-webfont.eot'
import montserratBoldWebfontTtf from './default/fonts/montserrat-bold-webfont.ttf'
import montserratBoldWebfontWoff from './default/fonts/montserrat-bold-webfont.woff'
import montserratBoldWebfontWoff2 from './default/fonts/montserrat-bold-webfont.woff2'
import montserratLightWebfontEot from './default/fonts/montserrat-light-webfont.eot'
import montserratLightWebfontTtf from './default/fonts/montserrat-light-webfont.ttf'
import montserratLightWebfontWoff from './default/fonts/montserrat-light-webfont.woff'
import montserratLightWebfontWoff2 from './default/fonts/montserrat-light-webfont.woff2'

const scaffolding = theme => css`
  @font-face {
    font-family: 'andes-black';
    src:
      url('${andesBlackWebfontEot}'),
      url('${andesBlackWebfontTtf}?#iefix') format('embedded-opentype'),
      url('${andesBlackWebfontWoff2}') format('woff2'),
      url('${andesBlackWebfontWoff}') format('woff'),
      url('${andesBlackWebfontTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'andes-extralight';
    src:
      url('${andesExtralightWebfontEot}'),
      url('${andesExtralightWebfontEot}?#iefix') format('embedded-opentype'),
      url('${andesExtralightWebfontWoff2}') format('woff2'),
      url('${andesExtralightWebfontWoff}') format('woff'),
      url('${andesExtralightWebfontTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'montserrat-black';
    src:
      url('${montserratBlackWebfontEot}'),
      url('${montserratBlackWebfontEot}?#iefix') format('embedded-opentype'),
      url('${montserratBlackWebfontWoff2}') format('woff2'),
      url('${montserratBlackWebfontWoff}') format('woff'),
      url('${montserratBlackWebfontTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'montserrat-bold';
    src:
      url('${montserratBoldWebfontEot}'),
      url('${montserratBoldWebfontEot}?#iefix') format('embedded-opentype'),
      url('${montserratBoldWebfontWoff2}') format('woff2'),
      url('${montserratBoldWebfontWoff}') format('woff'),
      url('${montserratBoldWebfontTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'montserrat-light';
    src:
      url('${montserratLightWebfontEot}'),
      url('${montserratLightWebfontEot}?#iefix') format('embedded-opentype'),
      url('${montserratLightWebfontWoff2}') format('woff2'),
      url('${montserratLightWebfontWoff}') format('woff'),
      url('${montserratLightWebfontTtf}') format('truetype');
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
    font-family: 'montserrat-light', sans-serif;
    font-size: ${theme.fonts.size.base};
    line-height: 2.1rem;
    color: ${theme.colors.grayscale.darker};
    white-space: normal;
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
`

export default scaffolding
