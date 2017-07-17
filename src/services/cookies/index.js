import reactCookie from 'react-cookie'

const universalSet = (name, value, { maxAge, ...options } = {}) => {
  const universalOptions = options

  /*
   This fixes a bug with react-cookie, the expiration values are evaluated as seconds on the client
   but express evaluates them as milliseconds
   */
  if (maxAge != null) {
    const isCodeRunByExpress = typeof window === 'undefined'
    const maxAgeFactor = isCodeRunByExpress ? 1000 : 1

    universalOptions.maxAge = maxAge * maxAgeFactor
  }

  reactCookie.save(name, value, universalOptions)
}


const cookies = {
  get: (...args) => reactCookie.load(...args),
  set: (...args) => universalSet(...args),
  delete: (...args) => reactCookie.remove(...args),
  plugToRequest: (...args) => reactCookie.plugToRequest(...args),
}

export default cookies
