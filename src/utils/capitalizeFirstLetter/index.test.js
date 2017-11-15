import capitalizeFirstLetter from '.'

it('should capitalize first letter', () => {
  const cases = [{
    input: 'hello',
    expected: 'Hello',
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
    expect(capitalizeFirstLetter(input)).toBe(expected)
  })
})
