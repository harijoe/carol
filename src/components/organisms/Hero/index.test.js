import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes/default'
import mockIntl from '../../../../test/intlMock'

import Hero from './'

it('renders the Hero component', () => {
  const wrapper = shallow(
    mockIntl(
      <ThemeProvider theme={theme}>
        <Hero
          firstChoices={[
            {
              title: 'test',
              image_url: 'test',
              buttons: [{ payload: 'test' }],
              subtitle: 'test',
            },
          ]}
        />
      </ThemeProvider>,
    ),
  )

  expect(wrapper).toMatchSnapshot()
})
