import React from 'react'
import { shallow } from 'enzyme'
import FirmListPage from './'

it('renders FirmListPage component', () => {
  shallow(<FirmListPage params={{ projectId: '554-54654654-65465' }} />)
})
