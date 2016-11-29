import React from 'react'
import LatestProjectsOnMap from '../../containers/LatestProjectsOnMap'
import LatestProjectsResources from '../../containers/LatestProjectsResources'
import TestimonialArticles from '../../containers/TestimonialArticles'
import ReinsuranceArticles from '../../containers/ReinsuranceArticles'

const Home = () => {
  return (
    <div>
      <LatestProjectsOnMap />
      <LatestProjectsResources />
      <TestimonialArticles />
      <ReinsuranceArticles />
    </div>
  )
}

export default Home
