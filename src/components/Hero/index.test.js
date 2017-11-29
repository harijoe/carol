import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'
import mockIntl from 'mocks/intlMock'

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
