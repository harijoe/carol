import stripTags from '.'

it('should strip html tags', () => {
  const cases = [{
    input: '<div>Hello <a href="www.google.com">World</a></div>',
    expected: 'Hello World',
  }, {
    input: '',
    expected: '',
  }, {
    input: 'Hello World',
    expected: 'Hello World',
  }, {
    input: null,
    expected: null,
  }]

  cases.forEach(({ input, expected }) => {
    expect(stripTags(input)).toBe(expected)
  })
})
