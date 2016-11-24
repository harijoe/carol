import React from 'react'
import LatestProjectsOnMap from '../../containers/LatestProjectsOnMap'
import LatestProjectsResources from '../../containers/LatestProjectsResources'
import ReinsuranceArticles from '../../containers/ReinsuranceArticles'

const Home = () => {
  return (
    <div>
      <LatestProjectsOnMap />
      <LatestProjectsResources />
      <ReinsuranceArticles />
    </div>
  )
}

export default Home
