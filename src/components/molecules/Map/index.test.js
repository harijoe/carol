import React from 'react'
import { shallow } from 'enzyme'
import Map from '.'

const wrap = (props = {}) => shallow(<Map {...props} country="FR"/>)

it('renders the Map component with markers', () => {
  const wrapper = wrap({ markers: [{ position: { lat: 48.857767, lng: 2.293604 } }] })

  expect(wrapper).toMatchSnapshot()
})
