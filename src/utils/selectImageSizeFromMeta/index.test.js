import selectImageSizeFromMeta from '.'

const image = 'https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/05/Porte-interieur.jpg'
const imageMeta = {
  width: 1600,
  height: 1100,
  file: '2017/05/Porte-interieur.jpg',
  sizes: {
    '350_220': {
      file: 'Porte-interieur-350x220.jpg',
      width: 350,
      height: 220,
      'mime-type': 'image/jpeg',
    },
  },
}

it('selects an image URL based on meta and given size', () => {
  expect(selectImageSizeFromMeta(image, imageMeta, '350_220')).toEqual('https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/05/Porte-interieur-350x220.jpg')
})

it('handles case without meta', () => {
  expect(selectImageSizeFromMeta(image)).toEqual('https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/05/Porte-interieur.jpg')
})

it('handles case without size', () => {
  expect(selectImageSizeFromMeta(image, imageMeta)).toEqual('https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/05/Porte-interieur.jpg')
})


it('handles case when the wanted size is not available', () => {
  const incompleteImageMeta = {
    width: 1600,
    height: 1100,
    file: '2017/05/Porte-interieur.jpg',
    sizes: {},
  }
  expect(selectImageSizeFromMeta(image, incompleteImageMeta, '100_100')).toEqual('https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/05/Porte-interieur.jpg')
})
