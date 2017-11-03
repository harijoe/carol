export default search => Object.assign(
  ...decodeURI(search.substring(1))
    .replace(/"/g, '\\"')
    .split('&')
    .map(keyValue => keyValue.split('='))
    .map(keyValueTupple => ({ [keyValueTupple[0]]: keyValueTupple[1] }))
)
