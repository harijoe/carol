import React from 'react'

import Carousel from './'

test('renders Carousel', () => {
  expect(
    <Carousel>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>,
  ).toMatchSnapshot()
})
