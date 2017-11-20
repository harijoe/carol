export default (input, inputSize) => {
  if (typeof input !== 'string') return input

  if (input.length <= inputSize) return input

  return input.slice(0, Math.min(inputSize + input.substr(inputSize).indexOf(' '), input.length)).concat('...')
}
