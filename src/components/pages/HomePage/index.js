import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { PostList } from 'containers'

const HomePage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <PostList scope="latestProjectsOnMap" tags={['inspiration', 'last-project']} limit={3} />
    <PostList scope="latestProjectsResources" tags={['work-resources']} limit={5} />
    <PostList scope="reinsuranceArticles" tags={['quotatis-reinsurance']} limit={3} />
    <PostList scope="testimonialArticles" tags={['testimony']} limit={10} />
  </PageTemplate>
)

export default HomePage
