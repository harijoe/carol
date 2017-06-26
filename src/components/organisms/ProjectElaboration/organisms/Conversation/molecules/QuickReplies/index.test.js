import React from 'react'
import { shallow } from 'enzyme'

import QuickReplies from './'

const wrap = (props = {}) => shallow(<QuickReplies {...props} />)

it('renders QuickReplies', () => {
  const wrapper = wrap({ quick_replies: [{ title: 'quick reply' }] })

  expect(wrapper.find('List')).toHaveLength(1)
  expect(wrapper).toMatchSnapshot()
})

it('renders null', () => {
  const wrapper = wrap({ quick_replies: [{ title: 'quick reply' }], answer: { text: 'response' } })

  expect(wrap().node).toBeNull()
  expect(wrapper.node).toBeNull()
})
