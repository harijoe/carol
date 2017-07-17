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
