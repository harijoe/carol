import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import theme from 'theme/default'
import Link, { StyledLink, Anchor } from '.'

const withTheme = component =>
  <ThemeProvider theme={theme}>
    {component}
  </ThemeProvider>

const withRouter = component =>
  <StaticRouter>
    {component}
  </StaticRouter>

const wrap = props => shallow(<Link theme={theme} {...props} />)

const wrapAndDive = props => wrap(props).dive()

const wrapMounted = (props = {}) =>
  mount(withTheme(withRouter(<Link {...props} />))).find(Link)

it('mounts with different combination of props', () => {
  mount(<Link theme={theme} />)
  mount(<Link theme={theme} light />)
  mount(
    <Link theme={theme} light>
      test
    </Link>,
  )
})

it('renders children when passed in', () => {
  const wrapper = wrapAndDive({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrapAndDive({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders span when no link', () => {
  const wrapper = wrapAndDive()

  expect(wrapper.find('span').length).toBeGreaterThan(0)
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

it('renders an Anchor when URL is absolute', () => {
  const wrapper = wrap({ to: 'http://company.com' })

  expect(wrapper.find(Anchor)).toHaveProp('href', 'http://company.com')
})

it('renders an Anchor when passed a mailto link', () => {
  const wrapper = wrap({ to: 'mailto:john.smith@company.com' })

  expect(wrapper.find(Anchor)).toHaveProp('href', 'mailto:john.smith@company.com')
})

it('renders an Anchor when passed a tel link', () => {
  const wrapper = wrap({ to: 'tel:0641696969' })

  expect(wrapper.find(Anchor)).toHaveProp('href', 'tel:0641696969')
})

it('renders a StyledLink when URL is relative', () => {
  const wrapper = wrap({ to: '/blog' })

  expect(wrapper.find(StyledLink)).toHaveProp('to', '/blog')
})

it('adds a / to the url when it is document relative', () => {
  const wrapper = wrap({ to: 'blog' })

  expect(wrapper.find(StyledLink)).toHaveProp('to', '/blog')
})

expect.extend({
  toHaveProp(wrapper, prop) {
    const pass = wrapper.prop(prop) !== undefined

    return {
      message: () => `expected <${wrapper.name()}/>${pass ? 'not' : ''} to be rendered with a ${prop}`,
      pass,
    }
  },
})
