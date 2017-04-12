import React from 'react'
import { shallow } from 'enzyme'

import Attachment from './'

const wrap = (props = {}) => shallow(<Attachment {...props} />)

it('renders QuickReplies', () => {
  const wrapper = wrap({
    attachment: {
      payload: {
        elements: [
          {
            title: 'test title',
            image_url: 'test_img.png',
            buttons: [
              {
                payload: '153-513-545133',
              }
            ],
          }
        ]
      }
    },
    reply: () => {},
  })

  expect(wrapper).not.toBe(null)
  expect(wrapper).toMatchSnapshot()
})
