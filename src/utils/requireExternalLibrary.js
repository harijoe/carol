class ExternalLibrary {

  static require(src) {
    const element = document.querySelector(`script[src='${src}']`)
    if (element) {
      return Promise.resolve(resolve => element.library.subscribe(resolve))
    }
    const script = document.createElement('script')
    script.setAttribute('async', '')
    script.setAttribute('defer', '')
    script.setAttribute('src', src)
    script.library = new ExternalLibrary(script)
    document.body.appendChild(script)
    return new Promise(resolve => script.library.subscribe(resolve))
  }

  constructor(script) {
    this.src = script.src
    this.subscribers = []
    this.loaded = false
    // eslint-disable-next-line no-param-reassign
    script.onload = this.onLoad
  }

  subscribe(callback) {
    if (this.loaded) {
      callback(this)
    }

    this.subscribers.push(callback)
  }

  onLoad = () => {
    this.loaded = true
    this.subscribers.forEach(callback => callback(this))
    this.subscribers.length = 0
  }
}

export default ExternalLibrary.require
