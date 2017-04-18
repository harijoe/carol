import React from 'react'
import { shallow, mount } from 'enzyme'
import { FormattedMessage } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes/default'
import mockIntl from '../../../../test/intlMock'

import Hero from './'

it('renders the Hero component', () => {
  const wrapper = shallow(mockIntl(<ThemeProvider theme={theme}><Hero firstChoices={[{
    title: 'test',
    image_url: 'test',
    buttons: [{ payload: 'test' }],
    subtitle: 'test',
  }]} /></ThemeProvider>))

  expect(wrapper).toMatchSnapshot()
})

it('renders the Hero component with a conversation in progress', () => {
  const wrapperHasConversation = mount(mockIntl(<ThemeProvider theme={theme}><Hero hasActiveConversation /></ThemeProvider>))
  const wrapperHasConversations = mount(mockIntl(<ThemeProvider theme={theme}><Hero hasConversations /></ThemeProvider>))

  expect(wrapperHasConversation.find('FormattedMessage').prop('id')).toEqual('hero.conversation_in_progress')
  expect(wrapperHasConversations.find('FormattedMessage').prop('id')).toEqual('hero.conversation_in_progress')
})
