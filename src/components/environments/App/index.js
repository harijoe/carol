import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { IntlProvider, GoogleTagManager } from 'containers'

class App extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet
          title="Comparer les prix avec 5 devis gratuits"
          titleTemplate="Devis Travaux - %s"
          meta={[
            { name: 'description', content: 'Quotatis vous permet d&apos;obtenir 5 devis gratuits sous trois jours. Demandes de devis comparatifs au 01.77.86.80.97 : devis travaux, devis pompe a chaleur, devis chauffage, devis defiscalisation, devis fenêtres, devis assurances, devis piscine, devis fenetres, devis climatisation, devis panneaux solaire photovoltaiques...' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { property: 'og:site_name', content: 'Quotatis' },
            { property: 'og:title', content: 'Devis Travaux - Comparer les prix avec 5 devis gratuits' },
            { property: 'og:image', content: 'https://lh5.googleusercontent.com/-H8MZCl-4zME/UI-VaVpuRjI/AAAAAAAAAAc/rc9uPeRIwsc/w851-h315-no/Quotatis-fond-googleplus.jpg' },
            { property: 'og:image:type', content: 'image/jpg' },
            { property: 'og:url', content: 'https://quotatis.fr' },
          ]}
        />
        <IntlProvider>
          {children}
        </IntlProvider>
        <GoogleTagManager />
      </div>
    )
  }
}

export default App
