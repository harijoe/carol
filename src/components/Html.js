import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { assetPath } from 'config'

const Html = ({ styles, assets, serializedState, content, lang }) => {
  const helmet = Helmet.rewind()
  const attrs = helmet.htmlAttributes.toComponent()

  return (
    <html lang={lang} {...attrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.script.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {styles}
      </head>
      <body>
        <main id="app">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </main>
        <script dangerouslySetInnerHTML={{ __html: serializedState }} />
        <script src={assetPath + assets.javascript.main} />
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.string.isRequired,
  assets: PropTypes.object.isRequired,
  serializedState: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
}

export default Html
