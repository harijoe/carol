import React from 'react'
import { mount } from 'enzyme'
import { injectTranslateImpl, translateForIntl } from './injectTranslate'

const messageId = 'welcome.message'
const messageValues = { name: 'Joe' }
const translation = 'Hello Joe!'


describe('translateForIntl', () => {
  it('translates', () => {
    const formatMessage = jest.fn()
    const intl = { formatMessage }

    formatMessage.mockReturnValue(translation)
    expect(translateForIntl(intl)(messageId, messageValues)).toEqual(translation)
    expect(intl.formatMessage).toBeCalledWith({ id: messageId }, messageValues)
  })
})

describe('injectTranslate implementation', () => {
  it('injects translate', () => {
    const translateFn = jest.fn()
    const translateForIntlImpl = () => translateFn
    // eslint-disable-next-line react/prop-types
    const SayHello = ({ translate }) => <div>{translate(messageId, messageValues)}</div>
    const TranslateInjected = injectTranslateImpl(translateForIntlImpl)(SayHello)

    translateFn.mockReturnValue(translation)
    mount(<TranslateInjected />)

    expect(translateFn).toBeCalledWith(messageId, messageValues)
  })
})
