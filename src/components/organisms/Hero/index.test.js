import React from 'react'
import { shallow, mount } from 'enzyme'
import { FormattedMessage } from 'react-intl'

import mockIntl from '../../../../test/intlMock'
import Hero from './'
import theme from '../../themes/default'

it('renders the Hero component', () => {
  const wrapper = shallow(mockIntl(<Hero theme={theme} firstChoices={[{
    title: 'test',
    image_url: 'test',
    buttons: [{ payload: 'test' }],
    subtitle: 'test'
  }]} />))

  expect(wrapper).toMatchSnapshot()
})

it('renders the Hero component with a conversation in progress', () => {
  const wrapperHasConversation = mount(mockIntl(<Hero hasActiveConversation />))
  const wrapperHasConversations = mount(mockIntl(<Hero hasConversations />))

  expect(wrapperHasConversation.find('FormattedMessage').prop('id')).toEqual('hero.conversation_in_progress')
  expect(wrapperHasConversations.find('FormattedMessage').prop('id')).toEqual('hero.conversation_in_progress')
})
