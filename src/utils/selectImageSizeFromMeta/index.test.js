import selectImageSizeFromMeta from '.'

const image = 'https://www.quotatis.fr/conseils-travaux/wp-content/uploads/2017/05/Porte-interieur.jpg'
const imageMeta = {
  width: 1600,
  height: 1100,
  file: '2017/05/Porte-interieur.jpg',
  sizes: {
    80: {
      file: 'Porte-interieur-80x80.jpg',
      width: 80,
      height: 80,
      'mime-type': 'image/jpeg',
    },
    300: {
      file: 'Porte-interieur-300x300.jpg',
      width: 300,
      height: 300,
      'mime-type': 'image/jpeg',
    },
    400: {
      file: 'Porte-interieur-400x400.jpg',
      width: 400,
      height: 400,
      'mime-type': 'image/jpeg',
    },
    550: {
      file: 'Porte-interieur-550x550.jpg',
      width: 550,
      height: 550,
      'mime-type': 'image/jpeg',
    },
    thumbnail: {
      file: 'Porte-interieur-150x150.jpg',
      width: 150,
      height: 150,
      'mime-type': 'image/jpeg',
    },
    medium: {
      file: 'Porte-interieur-300x206.jpg',
      width: 300,
      height: 206,
      'mime-type': 'image/jpeg',
    },
    medium_large: {
      file: 'Porte-interieur-768x528.jpg',
      width: 768,
      height: 528,
      'mime-type': 'image/jpeg',
    },
    large: {
      file: 'Porte-interieur-1024x704.jpg',
      width: 1024,
      height: 704,
      'mime-type': 'image/jpeg',
    },
    '350_220': {
      file: 'Porte-interieur-350x220.jpg',
      width: 350,
      height: 220,
      'mime-type': 'image/jpeg',
    },
    '370_650': {
      file: 'Porte-interieur-370x650.jpg',
      width: 370,
      height: 650,
      'mime-type': 'image/jpeg',
    },
    '400_260': {
      file: 'Porte-interieur-400x260.jpg',
      width: 400,
      height: 260,
      'mime-type': 'image/jpeg',
    },
    '600_260': {
      file: 'Porte-interieur-600x260.jpg',
      width: 600,
      height: 260,
      'mime-type': 'image/jpeg',
    },
    '800_260': {
      file: 'Porte-interieur-800x260.jpg',
      width: 800,
      height: 260,
      'mime-type': 'image/jpeg',
    },
    '840_600': {
      file: 'Porte-interieur-840x600.jpg',
      width: 840,
      height: 600,
      'mime-type': 'image/jpeg',
    },
    cards: {
      file: 'Porte-interieur-400x300.jpg',
      width: 400,
      height: 300,
      'mime-type': 'image/jpeg',
    },
    'hero-post-image': {
      file: 'Porte-interieur-1100x300.jpg',
      width: 1100,
      height: 300,
      'mime-type': 'image/jpeg',
    },
    'hero-full-width': {
      file: 'Porte-interieur-1600x800.jpg',
      width: 1600,
      height: 800,
      'mime-type': 'image/jpeg',
    },
    vertical_image: {
      file: 'Porte-interieur-300x206.jpg',
      width: 300,
      height: 206,
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
