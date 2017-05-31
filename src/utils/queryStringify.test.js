import queryStringify from './queryStringify'

describe('queryStringify', () => {

  it('returns the empty string when no params are passed in', () => {
    const queryString = queryStringify({})

    expect(queryString).toEqual('')
  })

  it('generates the correct query string', () => {
    const queryString = queryStringify({ username: "abcdef+1@gmail.com", password: 'qazio0!&' })

    expect(queryString).toMatchSnapshot()
  })

})
