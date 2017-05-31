const queryStringify = (params) => {
  const keys = Object.keys(params)

  if (keys.length === 0) {
    return ''
  }

  return `?${keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&')}`
}

export default queryStringify
