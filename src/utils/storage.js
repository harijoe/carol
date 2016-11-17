/*
 * Abstract web storage in a way that works both server and client side.
 * It will also make an eventual storage strategy switch easier.
 */


/**
 * In memory implementation of the Web Storage API
 *
 * note that, in server mode, the resulting store is acting like
 * a singleton and will stay alive between requests.
 *
 * WARNING: As a result, for now, the store is shared amongst all requests.
 */
export function inMemoryStorage() {
  return (() => {
    let store = {}

    return {
      // getters
      get length() {
        return Object.keys(store).length
      },

      // methods
      key: (n) => { return (Object.keys(store))[n] || null },
      getItem: (key) => { return store[key] || null },
      setItem: (key, value) => { store[key] = String(value) },
      removeItem: (key) => {
        delete store[key]
      },
      clear: () => { store = {} }
    }
  })()
}

/**
 * Choose the best storage strategy for the environment
 *
 * @return WebStorageImplementation - https://developer.mozilla.org/en-US/docs/Web/API/Storage

 */
function chooseDefaultStorage() {
  // In the browser, we prefer the native localStorage
  if (process.browser && 'undefined' !== typeof localStorage) {
    return localStorage
  }

  // In the server, we use our inMemory implementation.
  return inMemoryStorage()
}

export default chooseDefaultStorage()
