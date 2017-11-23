export default url => {
  const matches = url.match(/https?:\/\/[^:/]+.(\/[^?]*).*/)

  if (Array.isArray(matches)) {
    return matches[1]
  }

  return '/'
}
