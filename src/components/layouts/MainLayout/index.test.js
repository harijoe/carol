import React from 'react'
import { shallow } from 'enzyme'
import MainLayout from './'

it('should render MainLayout component', () => {
  expect(shallow(<MainLayout>test children</MainLayout>)).toMatchSnapshot()
})
