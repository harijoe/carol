import { unserialize } from 'php-unserialize'
import get from 'lodash/get'

export const transformToAlgoliaItem = item => {
  const algoliaItem = {}

  if (Array.isArray(item.category)) {
    const theme = item.category.filter(cat => get(cat, '$.domain') === 'inspiration_themes')

    if (theme[0]) {
      algoliaItem.theme_inspirations = theme[0]._
      algoliaItem.theme_iconId = item['wp:postmeta'].filter(meta => get(meta, 'wp:meta_key')[0] === '_yoast_wpseo_primary_inspiration_themes')[0]['wp:meta_value'][0]
    }
  }

  const mapping = {
    objectID: 'wp:post_id',
    title: 'title',
    link: 'link',
    status: 'wp:status',
    date: 'pubDate',
    image: 'wp:attachment_url',
    type: 'wp:post_type',
    content: 'content:encoded',
    excerpt: 'excerpt:encoded',
  }

  const mappingMeta = {
    thumbnail: '_thumbnail_id',
    image_meta: '_wp_attachment_metadata',
  }

  Object.keys(mapping).forEach(key => {
    algoliaItem[key] = Array.isArray(item[mapping[key]]) ? item[mapping[key]][0] : item[mapping[key]]
  })

  Object.keys(mappingMeta).forEach(key => {
    const found = item['wp:postmeta'] && item['wp:postmeta'].find(el => el['wp:meta_key'][0] === mappingMeta[key])
    if (found) {
      algoliaItem[key] = found['wp:meta_value'][0]
    }
  })

  return algoliaItem
}

export const unserializeImageMetadata = ({ image_meta, ...item }) => {

  if (image_meta) { // eslint-disable-line
    return { ...item, image_meta: unserialize(image_meta) }
  }

  return item
}

export const injectThumbnailToPost = objects => ({ image, ...item }) => {
  if (objects[item.thumbnail]) {
    return { ...item, image: objects[item.thumbnail].image, image_meta: objects[item.thumbnail].image_meta }
  }

  return item
}

export const transformThemes = (items, themes) =>
  themes.map(theme => {
    if (theme['wp:termmeta']) {
      const icon = theme['wp:termmeta'].filter(meta => meta['wp:meta_key'][0] === 'theme_icon')
      const color = theme['wp:termmeta'].filter(meta => meta['wp:meta_key'][0] === 'theme_color')

      if (icon[0] && color[0]) {
        return {
          id: theme['wp:term_id'][0],
          color: color[0]['wp:meta_value'][0],
          icon_url: items.filter(item => item['wp:post_id'][0] === icon[0]['wp:meta_value'][0])[0]['wp:attachment_url'][0],
        }
      }
    }
    return null
    })

export const mappingThemes = (objects, themes) => ({ ...item }) => {

  if (item.type === 'inspirations') {
    const themeInfo = themes.filter(theme => theme.id === item.theme_iconId)
    return { ...item, theme_icon_url: themeInfo[0].icon_url, theme_color: themeInfo[0].color }
  }

  return item
}
