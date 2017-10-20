export default usageText => {
  // eslint-disable-next-line no-console
  const usage = (level = 'error') => console[level](usageText)
  const fail = message => {
    console.error(message)
    usage()
    process.exit(1)
  }
  return { usage, fail }
}

