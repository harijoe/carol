import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'
import IconLink from '.'

const wrap = (props = {}) => shallow(<IconLink icon="github" {...props} />)

const mountWithTheme = children => mount(
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

it('mounts with different combination of props', () => {
  mountWithTheme(<IconLink icon="github">test</IconLink>)
  mountWithTheme(
    <IconLink icon="github" right>
      test
    </IconLink>,
  )
  mountWithTheme(
    <IconLink icon="github" responsive>
      test
    </IconLink>,
  )
  mountWithTheme(
    <IconLink icon="github" right responsive>
      test
    </IconLink>,
  )
  mountWithTheme(<IconLink icon="github" />)
  mountWithTheme(<IconLink icon="github" right />)
  mountWithTheme(<IconLink icon="github" responsive />)
  mountWithTheme(<IconLink icon="github" right responsive />)
  mountWithTheme(<IconLink icon="github" html />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('passes size to icon', () => {
  const wrapper = wrap({ size: 20 })

  expect(wrapper.find({ size: 20 / 3 }).length).toBeGreaterThan(0)
})

it('renders icon on left by default', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.children().at(0).prop('icon')).toBe('github')
})

it('renders icon on right when prop is passed in', () => {
  const wrapper = wrap({ children: 'test', right: true })

  expect(wrapper.children().at(1).prop('icon')).toBe('github')
})
