export default {
  url: 'https://carol-fr-dev.qarx.io',
  countryLabel: 'country.france',
  contentSiteUrl: 'https://www.quotatis.fr/conseils-travaux/',
  mainMenu: {
    resource: {
      guide: { path: 'guide', target: '_blank' },
      inspiring: { path: 'inspirations', target: '_blank' },
      faq: { path: 'FAQ', target: '_blank' },
      tools: { path: 'outils', target: '_blank' },
    },
    directory: '/annuaire-artisan',
    proUrl: 'https://www.quotatispro.fr',
  },
  genericProjectImages: [
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641857/FR/ChatbotImages/Q2/electricite-domotique-alarmes/installation-electrique-de-l-habitat.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641791/FR/ChatbotImages/Q2/construction-extension-renovation/renovation-de-maison-appartement-commerce.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641950/FR/ChatbotImages/Q2/experts-et-conseils-avant-travaux/architectev2.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641788/FR/ChatbotImages/Q2/construction-extension-renovation/amenagement-de-combles.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,g_custom:adv_faces,h_300,w_200/v1505381549/FrontApp/ChatbotImages/shutterstock_408737758.jpg',
    '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1505381593/FrontApp/ChatbotImages/shutterstock_536591941.jpg',
  ],
  genericFirmDetailImage: 'http://res.cloudinary.com/quotatis/image/upload/v1505381593/FrontApp/ChatbotImages/shutterstock_536591941.jpg',
  searchSuggestions: {
    primary: [
      {
        title: 'Fenêtre',
        slug: 'fenetre',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1502376733/FR/ChatbotImages/Q2/fenetres-et-ouvertures-exterieures/fenetre.jpg',
        tag: 'Projet',
      },
      {
        title: 'Chaudiere',
        slug: 'chaudiere',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/s--IHZ6SHmu--/c_imagga_scale,g_north_west,h_400,w_300/v1500642397/FR/ChatbotImages/Q2/isolation-chauffage-climatisation/chaudiere.jpg',
        tag: 'Projet',
      },
      {
        title: "Isolation par l'intérieur de plancher, mur, cloison, combles",
        slug: 'isolation-par-linterieur-de-plancher-mur-cloison-combles',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500642398/FR/ChatbotImages/Q2/isolation-chauffage-climatisation/isolation-par-l-interieur-de-plancher-mur-cloison-combles.jpg',
        tag: 'Projet',
      },
      {
        title: 'Aménagement complet de salle de bains',
        slug: 'amenagement-complet-de-salle-de-bains',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500641381/FR/ChatbotImages/Q2/amenagement-de-pieces/amenagement-complet-de-salle-de-bains.jpg',
        tag: 'Projet',
      },
      {
        title: 'Peinture et papier peint',
        slug: 'peinture-et-papier-peint',
        imageUrl:
          '//res.cloudinary.com/quotatis/image/upload/c_fill,h_300,w_200/v1500642631/FR/ChatbotImages/Q2/peinture-sols-et-eclairage/peinture-et-papier-peint.jpg',
        tag: 'Projet',
      },
    ],
    secondary: [
      {
        title: 'Rénovation de maison, appartement, commerce',
        slug: 'renovation-de-maison-appartement-commerce',
      },
      {
        title: 'Carrelage et parquet',
        slug: 'carrelage-et-parquet',
      },
      {
        title: 'Pompe à chaleur',
        slug: 'pompe-a-chaleur',
      },
    ],
  },
  footer: {
    advices: {
      column_1_1: {
        key: 'window',
        src: 'guide/fenetres-portes-volets/fenetre/',
      },
      column_1_2: {
        key: 'shutter',
        src: 'guide/fenetres-portes-volets/volets/',
      },
      column_1_3: {
        key: 'roof_insulation',
        src: 'guide/isolation/isolation-des-combles/',
      },
      column_2_1: {
        key: 'wood_heating',
        src: 'guide/chauffage/chauffage-au-bois/',
      },
      column_2_2: {
        key: 'heat_pumps',
        src: 'guide/chauffage/pompe-a-chaleur/',
      },
      column_2_3: {
        key: 'solar_heating',
        src: 'guide/chauffage/le-chauffage-solaire/',
      },
      column_3_1: {
        key: 'heating_gas_oil',
        src: 'guide/chauffage/chauffage-gaz-fioul/',
      },
      column_3_2: {
        key: 'electric_heating',
        src: 'guide/chauffage/chauffage-electrique/',
      },
      column_3_3: {
        key: 'fireplaces',
        src: 'guide/chauffage/cheminee-poele/',
      },
      column_4_1: {
        key: 'heat_emitters',
        src: 'guide/chauffage/emetteurs-de-chaleur/',
      },
      column_4_2: {
        key: 'domestic_hot_water_production',
        src: 'guide/chauffage/production-deau-chaude-sanitaire/',
      },
    },
    corporate: {
      column_1_1: {
        key: 'contact',
        src: '/contact-form.html',
        target: '_blank',
      },
      column_1_2: {
        key: 'about',
        src: 'qui-sommes-nous',
        contentSite: true,
        forceRedirect: true,
      },
      column_1_3: {
        key: 'job',
        src: '/emploi.html',
        target: '_blank',
      },
      column_1_4: {
        key: 'use_conditions',
        src: 'cgu',
        contentSite: true,
        forceRedirect: true,
      },
      column_2_1: {
        key: 'guides',
        src: '',
        contentSite: true,
        target: '_blank',
      },
      column_2_2: {
        key: 'directory',
        src: '/annuaire-artisan',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_3: {
        key: 'qpro',
        src: 'https://www.quotatispro.fr',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_4: {
        key: 'adeo',
        src: 'http://www.adeo.com/',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_5: {
        key: 'quote',
        src: '/travaux-entreprise.html',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_6: {
        key: 'folder_projects',
        src: '/dossiers-travaux.html',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_7: {
        key: 'trades',
        src: 'artisan-installateur-poseur-travaux.php',
        forceRedirect: true,
        target: '_blank',
      },
      column_2_8: {
        key: 'tools',
        src: 'outils',
        forceRedirect: true,
        contentSite: true,
        target: '_blank',
      },
    },
    social: {
      facebook: 'https://www.facebook.com/Quotatis.FR/',
      twitter: 'https://twitter.com/quotatisfr',
      linkedin: 'https://www.linkedin.com/company/quotatis',
      instagram: 'https://www.instagram.com/quotatis/',
    },
  },
}
