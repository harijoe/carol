const pushGtmEvent = (items) => {
  if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push(items)
  }
}

export default pushGtmEvent
