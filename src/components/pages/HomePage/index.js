import React from 'react'
import Helmet from 'react-helmet'

import {
  MainLayout,
  HowItWorks,
  Testimonials,
  TipsAndTricks,
  Reinsurance,
  LastProjects,
  MainWrapper,
} from 'components'
import { Hero } from 'containers'

const HomePage = props => (
  <MainLayout {...props}>
    <Helmet>
      <script type="application/ld+json">{`
        { "@context": "http://schema.org", "@type": "Organization", "url": "https://www.quotatis.fr", "name": "Quotatis", "logo": "https://res.cloudinary.com/quotatis/image/upload/v1496149619/FrontApp/icons/quotatis-firm.svg", "sameAs": [ "https://www.facebook.com/Quotatis.FR", "https://twitter.com/QuotatisFr", "https://www.youtube.com/user/quotatis", "http://fr.viadeo.com/fr/company/quotatis", "https://www.linkedin.com/company/quotatis", "https://www.instagram.com/quotatis/" ] }
      `}</script>
    </Helmet>
    <Hero />
    <MainWrapper>
      <LastProjects />
      <HowItWorks />
      <Testimonials />
      <TipsAndTricks />
      <Reinsurance />
    </MainWrapper>
  </MainLayout>
)

export default HomePage
