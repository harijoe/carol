const pushGtmEvent = item => {
  if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push(item)
  }
}

export default pushGtmEvent
