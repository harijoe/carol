import truncate from '.'

it('should truncate', () => {
  const cases = [{
    input: 'Hello world am I being truncate',
    inputSize: 10,
    expected: 'Hello world...',
  }, {
    input: '',
    inputSize: 10,
    expected: '',
  }, {
    input: 'Hello World',
    inputSize: 20,
    expected: 'Hello World',
  }, {
    input: 'Hello magic wonderful World',
    inputSize: 20,
    expected: 'Hello magic wonderful...',
  }, {
    input: null,
    inputSize: 10,
    expected: null,
  }]

  cases.forEach(({ input, inputSize, expected }) => {
    expect(truncate(input, inputSize)).toBe(expected)
  })
})
