export default {
  url: 'https://carol-co-uk-dev.qarx.io',
  countryLabel: 'country.great_britain',
  contentSiteUrl: 'https://www.quotatis.co.uk/advice/',
  mainMenu: {
    resource: {
      guide: { path: 'guide', target: '_blank' },
      inspiring: { path: 'inspiration', target: '_blank' },
      faq: { path: 'FAQ', target: '_blank' },
    },
    directory: '/tradesmen-directory',
    proUrl: 'https://www.quotatispro.co.uk',
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
        title: 'Conservatories and orangeries',
        slug: 'conservatories-and-orangeries',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1498836491/GB/ChatbotImages/Q1/conservatories-roofing-and-extensions.jpg',
        tag: 'Project',
      },
      {
        title: 'Boilers',
        slug: 'boilers',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_300,w_200/v1498836890/GB/ChatbotImages/Q1/heating-and-air-conditioning.jpg',
        tag: 'Project',
      },
      {
        title: 'Windows',
        slug: 'windows',
        imageUrl: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1498837780/GB/ChatbotImages/Q1/windows-and-doors.jpg',
        tag: 'Project',
      },
      {
        title: 'Solar panels',
        slug: 'solar-panels',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1498836105/GB/ChatbotImages/Q1/electrical-cctv-and-solar.jpg',
        tag: 'Project',
      },
      {
        title: 'Guttering soffits and fascias',
        slug: 'guttering-soffits-and-fascias',
        imageUrl: '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1495120786/GB/ChatbotImages/Q1/exterior-renovation.jpg',
        tag: 'Project',
      },
    ],
    secondary: [
      {
        title: 'Roofing',
        slug: 'roofing',
      },
      {
        title: 'Paving and Driveways',
        slug: 'paving-and-driveways',
      },
      {
        title: 'Asbestos',
        slug: 'asbestos',
      },
    ],
  },
  footer: {
    advices: {
      column_1_1: {
        key: 'solar_pv',
        src: 'guide/solar-panels/solar-pv/',
      },
      column_1_2: {
        key: 'windows',
        src: 'guide/windows-doors/windows/',
      },
      column_1_3: {
        key: 'conservatories',
        src: 'guide/conservatories-roofing-extensions/conservatories/',
      },
      column_2_1: {
        key: 'gas_boiler',
        src: 'guide/heating-air-con/gas-boilers/',
      },
      column_2_2: {
        key: 'pitched_roofing',
        src: 'guide/conservatories-roofing-extensions/pitched-roofing/',
      },
      column_2_3: {
        key: 'fascias',
        src: 'guide/conservatories-roofing-extensions/soffits-fascias/',
      },
      column_3_1: {
        key: 'driveways',
        src: 'guide/paving-driveways/driveways/',
      },
      column_3_2: {
        key: 'asbestos',
        src: 'guide/asbestos/asbestos-removal/',
      },
      column_3_3: {
        key: 'guttering',
        src: 'guide/conservatories-roofing-extensions/guttering/',
      },
      column_4_1: {
        key: 'tree_surgery',
        src: 'guide/garden-maintenance/tree-surgery/',
      },
      column_4_2: {
        key: 'air-con',
        src: 'guide/heating-air-con-insulation/air-con/',
      },
      column_4_3: {
        key: 'satellite',
        src: 'guide/electrical-cctv/aerials-satellite/',
      },
    },
    corporate: {
      column_1_1: {
        key: 'create_a_job',
        clickOnFindAPro: true,
      },
      column_1_2: {
        key: 'trades',
        src: 'home-improvement-quotes',
        target: '_blank',
      },
      column_1_3: {
        key: 'about',
        src: 'who-we-are',
        contentSite: true,
        forceRedirect: true,
      },
      column_1_4: {
        key: 'contact',
        src: '/contact.html',
        target: '_blank',
      },
      column_1_5: {
        key: 'use_conditions',
        src: 'privacy-policy',
        contentSite: true,
        forceRedirect: true,
      },
      column_1_6: {
        key: 'sitemap',
        src: '/sitemap',
        target: '_blank',
      },
      column_2_1: {
        key: 'news',
        src: 'http://blog.quotatis.co.uk',
        target: '_blank',
      },
      column_2_2: {
        key: 'guides',
        src: '',
        contentSite: true,
        forceRedirect: true,
        target: '_blank',
      },
      column_2_3: {
        key: 'directory',
        src: 'tradesmen-directory',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_4: {
        key: 'refer_a_pro',
        src: 'proreferral?spn=342',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_5: {
        key: 'trade_associations',
        src: 'trade-associations',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_6: {
        key: 'qpro',
        src: 'https://www.quotatispro.co.uk/register.html?spn=103',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_7: {
        key: 'affiliates',
        src: 'https://affiliate.quotatis.co.uk/?spn=103',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_8: {
        key: 'adeo',
        src: 'https://www.adeo.com/en/business-areas/chains/quotatis',
        forceRedirect: true,
        target: '_blank',
      },
    },
    social: {
      facebook: 'https://www.facebook.com/Quotatis',
      linkedin: 'https://www.linkedin.com/company/quotatisuk',
      twitter: 'https://twitter.com/Quotatis',
      google: 'https://plus.google.com/106376832204465138273',
      youtube: 'https://www.youtube.com/user/quotatisuk',
      pinterest: 'https://www.pinterest.com/quotatis/',
    },
  },
}
