import { cloudinary } from 'config'

export default (path, params) => {
  if (!params) {
    const isSvg = path.endsWith('.svg')
    const qualitySettings = isSvg ? 'q_auto' : 'q_auto,f_auto'
    return `${cloudinary.url}/${qualitySettings}/${cloudinary.app}${path}`
  }
    const cloudinaryParams = path.split('/')[6] // params always here in cloudinary URL
    const arr = path.split(cloudinaryParams)
    const rebuildUrl = `${arr[0]}${params}${arr[1]}`
    return rebuildUrl
}
