import React from 'react'
import { shallow } from 'enzyme'

import LastProjectCardContent from './'

it('renders LastProjectCardContent', () => {
  expect(shallow(
    <LastProjectCardContent
      image="image.jpg"
      title="test"
      firmName="firm"
      firmTrade="trade"
      place="place"
    />
  )).toMatchSnapshot()
})
