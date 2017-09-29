import { cloudinary } from 'config'

export default (path, params) => {
  if (!params) {
    const isSvg = path.endsWith('.svg')
    const qualitySettings = isSvg ? 'q_auto' : 'q_auto,f_auto'
    return `${cloudinary.url}/${qualitySettings}/${cloudinary.app}${path}`
  }
  const cloudinaryParts = path.split('/')
  let cloudinaryParams = cloudinaryParts[6]
  const isSignature = part => /^s--.*--$/.test(part)
  if (isSignature(cloudinaryParams)) {
    cloudinaryParams = cloudinaryParts[7]
  }
  const arr = path.split(cloudinaryParams)
  return `${arr[0]}${params}${arr[1]}`
}
