import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import Link from '.'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<Link theme={theme} {...props} />).dive()
const wrapMounted = (props = {}) => mount(<ThemeProvider theme={theme}><Link {...props} /></ThemeProvider>).find(Link)

it('mounts with different combination of props', () => {
  mount(<Link theme={theme} />)
  mount(<Link theme={theme} light />)
  mount(<Link theme={theme} light>test</Link>)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders anchor by default', () => {
  const wrapper = wrap()

  expect(wrapper.find('a').length).toBeGreaterThan(0)
})

it('renders Link when prop to is passed in', () => {
  const wrapper = wrapMounted({ to: 'test' })

  expect(wrapper.prop('to')).toEqual('test')
})

it('renders Router Link without highlight', () => {
  const wrapper = wrapMounted({ highlight: true, to: '/' })

  expect(wrapper.find('a')).not.toHaveProp('highlight')
})

it('renders Router Link without theme', () => {
  const wrapper = wrapMounted({ theme, to: '/' })

  expect(wrapper.find('a')).not.toHaveProp('theme')
})

it('renders Router Link without kind', () => {
  const wrapper = wrapMounted({ kind: 'black', to: '/' })

  expect(wrapper.find('a')).not.toHaveProp('kind')
})

it('renders Router Link without button', () => {
  const wrapper = wrapMounted({ button: true, to: '/' })

  expect(wrapper.find('a')).not.toHaveProp('button')
})

expect.extend({
  toHaveProp(wrapper, prop) {
    const pass = wrapper.prop(prop) !== undefined
    return {
      message: () => `expected <${wrapper.name()}/>${pass ? 'not' : ''} to be rendered with a ${prop}`,
      pass: pass
    };
  }
})

