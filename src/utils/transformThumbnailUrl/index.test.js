import transformThumbnailUrl from '.'

describe('transformThumbnailUrl', () => {

  it('transforms JPGs', () => {
    expect(transformThumbnailUrl('image.jpg')).toEqual('image_thumb.jpg')
    expect(transformThumbnailUrl('image.jpeg')).toEqual('image_thumb.jpeg')
  })

  it('transforms PNGs', () => {
    expect(transformThumbnailUrl('image.png')).toEqual('image_thumb.png')
  })

  it('transform filenames with more than one dot in them', () => {
    expect(transformThumbnailUrl('very.cool.image.png')).toEqual('very.cool.image_thumb.png')
  })

})
