import cloudinary from './cloudinary'

describe('cloudinary', () => {
  it('uses auto-format for SVGs', () => {
    expect(cloudinary('/profile.svg')).not.toContain('f_auto')
  })

  it('does not use auto-format for JPEGs', () => {
    expect(cloudinary('/profile.jpg')).toContain('f_auto')
  })

  it('uses auto-quality for SVGs', () => {
    expect(cloudinary('/profile.svg')).toContain('q_auto')
  })

  it('uses auto-quality for JPEGs', () => {
    expect(cloudinary('/profile.jpg')).toContain('q_auto')
  })
})

describe('cloudinary Replace Params', () => {

  it('replaces current params with new ones', () => {
    expect(cloudinary(
      'https://res.cloudinary.com/quotatis/image/upload/ar_10:11,c_crop,h_484,w_440/v1495120789/FR/ChatbotImages/Q1/electricite-domotique-alarmes.jpg',
      'c_fill,h_225,w_525',
    )).toEqual(
      'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_225,w_525/v1495120789/FR/ChatbotImages/Q1/electricite-domotique-alarmes.jpg',
    )
  })

})
