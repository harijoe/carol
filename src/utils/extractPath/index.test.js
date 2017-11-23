import extractPath from '.'

describe('extractPath', () => {
  it('extracts path from location with query', () => {
    expect(extractPath('http://mysite.org/this/is?my=path')).toEqual('/this/is')
  })

  it('extracts path from location when it has no path', () => {
    expect(extractPath('http://mysite.org')).toEqual('/')
    expect(extractPath('http://mysite.org/')).toEqual('/')
  })

  it('extracts path from location without query', () => {
    expect(extractPath('http://mysite.org/this')).toEqual('/this')
  })
})
