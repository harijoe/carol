import hostnameFromUrl from './hostNameFromUrl'

describe('hostnameFromUrl', () => {
  it('returns the hostname from an http url', () => {
    expect(hostnameFromUrl('http://mysite.org')).toEqual('mysite.org')
  })

  it('returns the hostname from an https url', () => {
    expect(hostnameFromUrl('https://mysite.org')).toEqual('mysite.org')
  })

  it('returns the hostname from a url with a path', () => {
    expect(hostnameFromUrl('https://mysite.org/path')).toEqual('mysite.org')
  })

  it('returns the hostname from a url with a port number', () => {
    expect(hostnameFromUrl('https://mysite.org:5800')).toEqual('mysite.org')
  })

  it('returns the hostname from a url with a port and a path', () => {
    expect(hostnameFromUrl('https://mysite.org:5800/path')).toEqual('mysite.org')
  })
})
