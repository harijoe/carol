export default (image, imageMeta, size) => {
  if (!imageMeta || !size) return image

  return imageMeta.sizes[size] ? `${image.substr(0, image.lastIndexOf('/'))}/${imageMeta.sizes[size].file}` : image
}
