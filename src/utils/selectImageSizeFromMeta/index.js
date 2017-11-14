export default (image, imageMeta, size) => {
  if (!imageMeta || !size) return image


  return `${image.substr(0, image.lastIndexOf('/'))}/${imageMeta.sizes[size].file}`
}
