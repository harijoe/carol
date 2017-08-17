import { cloudinary } from 'config'

export default path => {
  const isSvg = path.endsWith('.svg')
  const qualitySettings = isSvg ? 'q_auto' : 'q_auto,f_auto'

  return `${cloudinary.url}/${qualitySettings}/${cloudinary.app}${path}`
}
