const transformThumbnailUrl = url => {
  const address = url.substr(0, url.lastIndexOf('.'))
  const ext = url.substr(url.lastIndexOf('.'), url.length)
  return `${address}_thumb${ext}`
}

export default transformThumbnailUrl
