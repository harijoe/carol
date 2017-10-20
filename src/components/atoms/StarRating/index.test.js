import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes/default'
import StarRating, { starValue } from '.'

describe('starValue', () => {

  it('returns 1 if value is above ceiling', () => {
    expect(starValue(1, 0)).toBeCloseTo(1, 2)
    expect(starValue(1.5, 0)).toBeCloseTo(1, 2)
    expect(starValue(2, 1)).toBeCloseTo(1, 2)
    expect(starValue(2.5, 1)).toBeCloseTo(1, 2)
    expect(starValue(3, 2)).toBeCloseTo(1, 2)
    expect(starValue(3.5, 2)).toBeCloseTo(1, 2)
  })

  it('returns 0 if value is bellow floor', () => {
    expect(starValue(0, 0)).toBeCloseTo(0, 2)
    expect(starValue(0, 1)).toBeCloseTo(0, 2)
    expect(starValue(0.5, 1)).toBeCloseTo(0, 2)
    expect(starValue(1, 1)).toBeCloseTo(0, 2)
    expect(starValue(1.5, 2)).toBeCloseTo(0, 2)
    expect(starValue(2, 2)).toBeCloseTo(0, 2)
  })

  it('returns fractional part if value is between floor and celing', () => {
    expect(starValue(0.2, 0)).toBeCloseTo(0.2, 2)
    expect(starValue(1.5, 1)).toBeCloseTo(0.5, 2)
    expect(starValue(2.3, 2)).toBeCloseTo(0.3, 2)
  })

})

describe('StarRating', () => {

  const render = component => shallow(<ThemeProvider theme={theme}>{component}</ThemeProvider>).dive()

  it('displays 5 stars', () => {
    expect(render(<StarRating value={5} />)).toMatchSnapshot()
  })

  it('displays 0 stars', () => {
    expect(render(<StarRating value={0} />)).toMatchSnapshot()
  })

  it('displays 2.5 stars', () => {
    expect(render(<StarRating value={2.5} />)).toMatchSnapshot()
  })

})

