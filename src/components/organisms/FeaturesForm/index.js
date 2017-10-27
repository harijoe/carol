import React from 'react'
import PropTypes from 'prop-types'
import reactCookie from 'services/cookies/index'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { Section } from 'components'
import Feature from './atoms/Feature'

const StyledSection = styled(Section)`
  position: relative;
  margin-top: 1rem;
  min-height: 100vh;
  background: ${theme('colors.white')};
`

const FEATURES = ['pro-page', 'pro-page-team', 'pro-page-map', 'wordpress_content']

class FeaturesForm extends React.Component {
  static propTypes = {
    features: PropTypes.object.isRequired,
    enableFeature: PropTypes.func.isRequired,
  }

  componentDidUpdate(prevProps) {
    const { features } = this.props
    if (prevProps.features !== features) {
      const enabledFeatures = Object.keys(features)
        .map(cookieName => ({ name: cookieName, enabled: features[cookieName] }))
        .filter(feature => feature.enabled)
        .map(feature => feature.name)
        .join(',')
      reactCookie.set('features', enabledFeatures, { path: '/', maxAge: 3 * 24 * 3600 })
    }
  }

  render() {
    const { features, enableFeature } = this.props
    return (
      <StyledSection>
        <h1>Features</h1>
        {FEATURES.map(feature =>
          <Feature
            key={feature}
            name={feature}
            enabled={!!features[feature]}
            onClick={() => enableFeature(feature, !features[feature])}
          />
        )}
      </StyledSection>
    )
  }
}

export default FeaturesForm
