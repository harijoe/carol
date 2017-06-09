const getImageURL = (imageURL, imageSize) => {
  const index = imageURL.lastIndexOf('.')
  const filename = imageURL.substr(0, index)
  const extension = imageURL.substr(index, imageURL.length)
  const size = `-${imageSize}`

  return filename + size + extension
}

export default getImageURL
