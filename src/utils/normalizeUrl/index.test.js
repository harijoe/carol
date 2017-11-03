import normalizeUrl from '.'

describe('normalizeUrl', () => {
  it('returns the URL is it is absolute', () => {
    expect(normalizeUrl('http://whatever.org')).toEqual('http://whatever.org')
    expect(normalizeUrl('https://i-am-secure.com')).toEqual('https://i-am-secure.com')
  })

  it('adds http:// if no protocol is present', () => {
    expect(normalizeUrl('what.io')).toEqual('http://what.io')
  })
})
