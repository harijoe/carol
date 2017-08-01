import { format, normalize } from './transformPhone'

describe('fr', () => {
  it('formats a french number', () => {
    expect(format('fr')('+33641697173')).toEqual('0641697173')
  })

  it('does not format a foreign number', () => {
    expect(format('fr')('+44641697173')).toEqual('+44641697173')
  })

  it('normalises', () => {
    expect(normalize('fr')('0641697173')).toEqual('+33641697173')
    expect(normalize('fr')('06 41 69 71 73')).toEqual('+33641697173')
  })
})

describe('en', () => {
  it('format a english number', () => {
    expect(format('en')('+442082860752')).toEqual('02082860752')
  })

  it('does not format a foreign number', () => {
    expect(format('en')('+33641697173')).toEqual('+33641697173')
  })

  it('normalises', () => {
    expect(normalize('en')('02082860752')).toEqual('+442082860752')
  })
})

describe('es', () => {
  it('formats', () => {
    expect(format('es')('+34900300700')).toEqual('900300700')
  })

  it('does not format a foreign number', () => {
    expect(format('es')('+33641697173')).toEqual('+33641697173')
  })

  it('normalises', () => {
    expect(normalize('es')('900300700')).toEqual('+34900300700')
  })
})

describe('unknown language', () => {
  it('throws with an good error', () => {
    expect(() => format('zz')('+33641697173')).toThrowErrorMatchingSnapshot()
    expect(() => normalize('zz')('0641697173')).toThrowErrorMatchingSnapshot()
  })
})
