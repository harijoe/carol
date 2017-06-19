import React from 'react'
import { shallow } from 'enzyme'

import LastProjectCardContent from './'

it('renders LastProjectCardContent', () => {

  const featuredMedia = {
    src: 'image.jpg',
    sizes: {
      80: 'image.jpg',
    },
    alt: 'Alt',
  }

  expect(shallow(
    <LastProjectCardContent
      image="image.jpg"
      title="test"
      firmName="firm"
      firmTrade="trade"
      firmImage={featuredMedia}
      place="place"
    />
  )).toMatchSnapshot()
})
