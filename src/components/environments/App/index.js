import React, { PropTypes } from 'react'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

injectGlobal(['body { margin: 0; }'])

const App = props => (
  <div>
    <Helmet
      title="Comparer les prix avec 5 devis gratuits"
      titleTemplate="Devis Travaux - %s"
      meta={[
        { name: 'description', content: 'Quotatis vous permet d&apos;obtenir 5 devis gratuits sous trois jours. Demandes de devis comparatifs au 01.77.86.80.97 : devis travaux, devis pompe a chaleur, devis chauffage, devis defiscalisation, devis fenêtres, devis assurances, devis piscine, devis fenetres, devis climatisation, devis panneaux solaire photovoltaiques...' },
        { name:'viewport', content:'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'Quotatis' },
        { property: 'og:title', content: 'Devis Travaux - Comparer les prix avec 5 devis gratuits' },
        { property: 'og:image', content: 'https://lh5.googleusercontent.com/-H8MZCl-4zME/UI-VaVpuRjI/AAAAAAAAAAc/rc9uPeRIwsc/w851-h315-no/Quotatis-fond-googleplus.jpg' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:url', content: 'https://quotatis.fr' },
      ]}
      link={[
        { rel: 'icon', href: 'https://quotatis.fr/favicon.ico' }
      ]}
    />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.any,
}

export default App
