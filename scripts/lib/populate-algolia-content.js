import { unserialize } from 'php-unserialize'
import get from 'lodash/get'

export const transformToAlgoliaItem = item => {
  const algoliaItem = {}

  if (Array.isArray(item.category)) {
    const theme = item.category.filter(cat => get(cat, '$.domain') === 'inspiration_themes')

    if (theme[0]) {
      algoliaItem.theme_inspirations = theme[0]._
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
