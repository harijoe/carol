import React from 'react'
import { shallow } from 'enzyme'

import { ThumbnailCard, ThumbnailPoster } from 'components'

import Key2Thumbnail from '.'

describe('Key2Thumbnail', () => {
  it('renders ThumbnailCard when subtitle is present', () => {
    const wrapper = shallow(<Key2Thumbnail subtitle="subtitle" />)
    expect(wrapper.find(ThumbnailCard).exists()).toBe(true)
    expect(wrapper.find(ThumbnailPoster).exists()).toBe(true)
  })

  it('renders ThumbnailPoster when subtitle is missing', () => {
    const wrapper = shallow(<Key2Thumbnail />)
    expect(wrapper.find(ThumbnailPoster).exists()).toBe(true)
    expect(wrapper.find(ThumbnailCard).exists()).toBe(true)
  })
})
