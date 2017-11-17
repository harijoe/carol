/*
  JS equivalent to PHP's strip_tags
 */
export default rawHtml => rawHtml ? rawHtml.replace(/<\/?[^>]+(>|$)/g, '') : rawHtml
