import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gtmParts from 'react-google-tag-manager'

class GoogleTagManager extends Component {
  static propTypes = {
    gtmId: PropTypes.string.isRequired,
    dataLayerName: PropTypes.string,
    additionalEvents: PropTypes.object,
    scriptId: PropTypes.string,
  }

  static defaultProps = {
    dataLayerName: 'dataLayer',
    scriptId: 'react-google-tag-manager-gtm',
    additionalEvents: {},
  }

  componentDidMount() {
    const { dataLayerName, scriptId } = this.props

    if (!window[dataLayerName]) {
      const gtmScriptNode = document.getElementById(scriptId)

      // eslint-disable-next-line no-eval
      eval(gtmScriptNode.textContent)
    }
  }

  render() {
    const { gtmId, scriptId, dataLayerName, additionalEvents } = this.props
    const gtm = gtmParts({
      id: gtmId,
      dataLayerName,
      additionalEvents,
    })

    return (
      <div>
        <div>
          {gtm.noScriptAsReact()}
        </div>
        <div id={scriptId}>
          {gtm.scriptAsReact()}
        </div>
      </div>
    )
  }
}

export default GoogleTagManager
