export default {
  url: 'https://carol-es-dev.qarx.io',
  countryLabel: 'country.spain',
  contentSiteUrl: 'https://www.quotatis.es/consejos-reformas/',
  mainMenu: {
    resource: {
      guide: { path: 'guia', target: '_blank' },
      inspiring: { path: 'Inspiracion', target: '_blank' },
      faq: { path: 'preguntas-frecuentes', target: '_blank' },
    },
    directory: '/directorio-empresas',
    proUrl: 'https://www.quotatispro.es',
  },
  genericProjectImages: [
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641857/FR/ChatbotImages/Q2/electricite-domotique-alarmes/installation-electrique-de-l-habitat.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641791/FR/ChatbotImages/Q2/construction-extension-renovation/renovation-de-maison-appartement-commerce.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641950/FR/ChatbotImages/Q2/experts-et-conseils-avant-travaux/architectev2.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641788/FR/ChatbotImages/Q2/construction-extension-renovation/amenagement-de-combles.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,g_custom:adv_faces,h_300,w_200/v1505381549/FrontApp/ChatbotImages/shutterstock_408737758.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1505381593/FrontApp/ChatbotImages/shutterstock_536591941.jpg',
  ],
  genericFirmDetailImage: 'http://res.cloudinary.com/quotatis/image/upload/v1508320474/FrontApp/proprofile-cover-image.jpg',
  searchSuggestions: {
    primary: [
      {
        title: 'Reforma Integral',
        slug: 'reforma-integral',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,g_custom:adv_faces,h_300,w_200/v1505398461/ES/ChatbotImages/Q2/reformas/reforma-integral.jpg',
        tag: 'Proyecto',
      },
      {
        title: 'Pintura',
        slug: 'pintura',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_300,w_200/v1505398433/ES/ChatbotImages/Q2/pintura-suelos-y-paredes/pintura.jpg',
        tag: 'Proyecto',
      },
      {
        title: 'Reforma de Baño',
        slug: 'reforma-de-bano',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,g_custom:adv_face,h_300,w_200/v1505398462/ES/ChatbotImages/Q2/reformas/reforma-de-bano.jpg',
        tag: 'Proyecto',
      },
      {
        title: 'Reforma de Cocina',
        slug: 'reforma-de-cocina',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_300,w_200/v1505398461/ES/ChatbotImages/Q2/reformas/reforma-de-cocina.jpg',
        tag: 'Proyecto',
      },
      {
        title: 'Albañilería',
        slug: 'albanileria',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,g_east,h_300,w_200/v1505396926/ES/ChatbotImages/Q2/albanileria-carpinteria-y-puertas/albanileria.jpg',
        tag: 'Proyecto',
      },
    ],
    secondary: [
      {
        title: 'Reforma parcial',
        slug: 'reforma-parcial',
      },
      {
        title: 'Carpintería',
        slug: 'carpinteria',
      },
      {
        title: 'Pavimentos y Revestimientos',
        slug: 'pavimentos-y-revestimientos',
      },
    ],
  },
  footer: {
    advices: {
      column_1_1: {
        key: 'reforma.bano',
        src: 'guia/reformas/reforma-de-bano/',
      },
      column_1_2: {
        key: 'reforma.coccina',
        src: 'guia/reformas/cocina/',
      },
      column_1_3: {
        key: 'pintura.integral',
        src: 'guia/pintura-suelos-y-paredes/pintura/',
      },
      column_2_1: {
        key: 'albanileria',
        src: 'guia/albanileria-carpinteria-y-puertas/albanileria/',
      },
      column_2_2: {
        key: 'carpintería',
        src: 'guia/albanileria-carpinteria-y-puertas/carpinteria/',
      },
      column_2_3: {
        key: 'cubiertas_y_tejados',
        src: 'guia/tratamiento-y-renovacion-de-exteriores/cubiertas-y-tejados/',
      },
      column_3_1: {
        key: 'suelos',
        src: 'guia/pintura-suelos-y-paredes/suelos/',
      },
      column_3_2: {
        key: 'aire.acondicionado',
        src: 'guia/aislamiento-calefaccion-aire-acondicionado/aire-acondicionado/',
      },
      column_3_3: {
        key: 'fontanería',
        src: 'guia/fontaneria-y-gas/fontaneria/',
      },
      column_4_1: {
        key: 'ventanas',
        src: 'guia/ventanas-y-aperturas-exteriores/ventanas/',
      },
      column_4_2: {
        key: 'puertas',
        src: 'guia/albanileria-carpinteria-y-puertas/puertas/',
      },
      column_4_3: {
        key: 'trabajos_verticales',
        src: 'guia/tratamiento-y-renovacion-de-exteriores/trabajos-verticales/',
      },
    },
    corporate: {
      column_1_1: {
        key: 'contact',
        src: '/contactanos.html',
        target: '_blank',
      },
      column_1_2: {
        key: 'about',
        src: 'quienes-somos ',
        contentSite: true,
        forceRedirect: true,
      },
      column_1_3: {
        key: 'use_conditions',
        src: 'menciones-legales',
        contentSite: true,
        forceRedirect: true,
      },
      column_2_1: {
        key: 'guides',
        src: '',
        contentSite: true,
        forceRedirect: true,
        target: '_blank',
      },
      column_2_2: {
        key: 'qpro',
        src: 'https://www.quotatispro.es/',
        target: '_blank',
      },
      column_2_3: {
        key: 'reforming',
        src: 'https://www.quotatis.es/categorias.html',
        target: '_blank',
      },
    },
    social: {
      facebook: 'https://www.facebook.com/Quotatis.Es',
      twitter: 'https://twitter.com/QuotatisEspana',
      linkedin: 'https://www.linkedin.com/company/quotatis-españa',
      instagram: 'https://www.instagram.com/quotatis_es/',
    },
  },
}
