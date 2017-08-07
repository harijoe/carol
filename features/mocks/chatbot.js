export const homepage = [
  { message: { text: 'Bonjour, quel type de travaux souhaitez-vous faire ?', quick_replies: [] } },
  {
    message: {
      is_first_step: true,
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          image_aspect_ratio: 'horizontal',
          elements: [
            {
              title: 'Fenêtres et ouvertures extérieures',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_crop,g_west,h_484,w_440,x_250/v1495181695/FR/ChatbotImages/Q1/fenetres-et-ouvertures-exterieures.jpg',
              item_url: null,
              subtitle: 'Fenêtre, baie vitrée\nVolet, store\nPorte de garage',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '87b035a4-c3c3-44bc-89e9-fd5d862d6048' }],
            },
            {
              title: 'Isolation, chauffage, climatisation',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_440,w_400/v1495181696/FR/ChatbotImages/Q1/isolation-chauffage-climatisation.jpg',
              item_url: null,
              subtitle: 'Chaudière\nIsolation de combles\nVMC, pompe à chaleur',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '604a3a0c-973e-4534-b7db-a865db9997ca' }],
            },
            {
              title: 'Plomberie, eau chaude',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_440,w_400/v1495181773/FR/ChatbotImages/Q1/plomberie-eau-chaude.jpg',
              item_url: null,
              subtitle: "Chauffe-eau, ballon\nRobinetterie\nDouche à l'italienne",
              buttons: [{ type: 'postback', title: 'Choisir', payload: '178edbe1-37d2-4152-a779-92a50ad3a193' }],
            },
            {
              title: 'Construction, extension, rénovation',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/ar_10:11,c_crop,g_west,h_484,w_440,x_100,y_-20/v1495120788/FR/ChatbotImages/Q1/construction-extension-renovation.jpg',
              item_url: null,
              subtitle: 'Toiture, charpente\nCombles\nVéranda, extension',
              buttons: [{ type: 'postback', title: 'Choisir', payload: 'f20a8125-251f-4a58-b4f3-f7a4c652c44b' }],
            },
            {
              title: 'Rénover et isoler les extérieurs',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_440,w_400/v1495181697/FR/ChatbotImages/Q1/renover-et-isoler-les-exterieurs.jpg',
              item_url: null,
              subtitle: 'Ravalement de façade\nIsolation extérieure\nPeinture extérieure\n',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '879cf03e-a327-4e15-ac7f-66f1844afc79' }],
            },
            {
              title: 'Peinture, sols et éclairage',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_east,h_440,w_400/v1495181696/FR/ChatbotImages/Q1/peinture-sols-et-eclairage.jpg',
              item_url: null,
              subtitle: 'Peinture intérieure\nCarrelage, parquet\nLuminaire intérieur',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '0beef8be-a1fe-461d-8612-eaca0cab301b' }],
            },
            {
              title: 'Aménagement de pièces',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_440,w_400/v1495181697/FR/ChatbotImages/Q1/amenagement-de-pieces.jpg',
              item_url: null,
              subtitle: 'Cuisine, salle de bains\nDressing, placard\nSenior et handicap',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '9b1ffa60-0bfe-4059-9fdb-7f69748b63d8' }],
            },
            {
              title: 'Cloisons, escaliers, portes d’intérieur',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_crop,g_south,h_484,w_440,x_0,y_30/v1495181695/FR/ChatbotImages/Q1/cloisons-escaliers-portes-d-interieur.jpg',
              item_url: null,
              subtitle: 'Plaque de plâtre\nPorte à galandage\nCloison vitrée',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '91511f28-94d3-4992-96aa-f2f03b873b05' }],
            },
            {
              title: 'Électricité, domotique, alarmes',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/ar_10:11,c_crop,h_484,w_440/v1495120789/FR/ChatbotImages/Q1/electricite-domotique-alarmes.jpg',
              item_url: null,
              subtitle: 'Panneaux solaires\nMotorisation\nVidéosurveillance',
              buttons: [{ type: 'postback', title: 'Choisir', payload: 'c8500f1f-9bda-486f-b5c5-5c913468b20e' }],
            },
            {
              title: 'Jardin, aménagement extérieur',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_440,w_400/v1495181697/FR/ChatbotImages/Q1/jardin-amenagement-exterieur.jpg',
              item_url: null,
              subtitle: 'Terrasse, abri\nPiscine\nPortail et clôture',
              buttons: [{ type: 'postback', title: 'Choisir', payload: 'cb49572a-e90f-4d95-a2b3-792c375b172d' }],
            },
            {
              title: 'Bilans et diagnostics',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_440,w_400,x_214,y_146,z_0.9/v1495120787/FR/ChatbotImages/Q1/bilans-et-diagnostics.jpg',
              item_url: null,
              subtitle: 'Bilan thermique\nDiagnostic immobilier\nDiagnostic humidité',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '99537930-f7d4-4bf5-a202-701049653861' }],
            },
          ],
        },
      },
    },
  },
]
export const reset = [
  { message: { text: 'Bonjour, quel type de travaux souhaitez-vous faire ?', quick_replies: [] } },
  {
    message: {
      is_first_step: true,
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          image_aspect_ratio: 'horizontal',
          elements: [
            {
              title: 'Fenêtres et ouvertures extérieures',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_crop,g_west,h_484,w_440,x_250/v1495181695/FR/ChatbotImages/Q1/fenetres-et-ouvertures-exterieures.jpg',
              item_url: null,
              subtitle: 'Fenêtre, baie vitrée\nVolet, store\nPorte de garage',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '87b035a4-c3c3-44bc-89e9-fd5d862d6048' }],
            },
            {
              title: 'Isolation, chauffage, climatisation',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_440,w_400/v1495181696/FR/ChatbotImages/Q1/isolation-chauffage-climatisation.jpg',
              item_url: null,
              subtitle: 'Chaudière\nIsolation de combles\nVMC, pompe à chaleur',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '604a3a0c-973e-4534-b7db-a865db9997ca' }],
            },
            {
              title: 'Plomberie, eau chaude',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_440,w_400/v1495181773/FR/ChatbotImages/Q1/plomberie-eau-chaude.jpg',
              item_url: null,
              subtitle: "Chauffe-eau, ballon\nRobinetterie\nDouche à l'italienne",
              buttons: [{ type: 'postback', title: 'Choisir', payload: '178edbe1-37d2-4152-a779-92a50ad3a193' }],
            },
            {
              title: 'Construction, extension, rénovation',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/ar_10:11,c_crop,g_west,h_484,w_440,x_100,y_-20/v1495120788/FR/ChatbotImages/Q1/construction-extension-renovation.jpg',
              item_url: null,
              subtitle: 'Toiture, charpente\nCombles\nVéranda, extension',
              buttons: [{ type: 'postback', title: 'Choisir', payload: 'f20a8125-251f-4a58-b4f3-f7a4c652c44b' }],
            },
            {
              title: 'Rénover et isoler les extérieurs',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_440,w_400/v1495181697/FR/ChatbotImages/Q1/renover-et-isoler-les-exterieurs.jpg',
              item_url: null,
              subtitle: 'Ravalement de façade\nIsolation extérieure\nPeinture extérieure\n',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '879cf03e-a327-4e15-ac7f-66f1844afc79' }],
            },
            {
              title: 'Peinture, sols et éclairage',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_east,h_440,w_400/v1495181696/FR/ChatbotImages/Q1/peinture-sols-et-eclairage.jpg',
              item_url: null,
              subtitle: 'Peinture intérieure\nCarrelage, parquet\nLuminaire intérieur',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '0beef8be-a1fe-461d-8612-eaca0cab301b' }],
            },
            {
              title: 'Aménagement de pièces',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,h_440,w_400/v1495181697/FR/ChatbotImages/Q1/amenagement-de-pieces.jpg',
              item_url: null,
              subtitle: 'Cuisine, salle de bains\nDressing, placard\nSenior et handicap',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '9b1ffa60-0bfe-4059-9fdb-7f69748b63d8' }],
            },
            {
              title: 'Cloisons, escaliers, portes d’intérieur',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_crop,g_south,h_484,w_440,x_0,y_30/v1495181695/FR/ChatbotImages/Q1/cloisons-escaliers-portes-d-interieur.jpg',
              item_url: null,
              subtitle: 'Plaque de plâtre\nPorte à galandage\nCloison vitrée',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '91511f28-94d3-4992-96aa-f2f03b873b05' }],
            },
            {
              title: 'Électricité, domotique, alarmes',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/ar_10:11,c_crop,h_484,w_440/v1495120789/FR/ChatbotImages/Q1/electricite-domotique-alarmes.jpg',
              item_url: null,
              subtitle: 'Panneaux solaires\nMotorisation\nVidéosurveillance',
              buttons: [{ type: 'postback', title: 'Choisir', payload: 'c8500f1f-9bda-486f-b5c5-5c913468b20e' }],
            },
            {
              title: 'Jardin, aménagement extérieur',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_440,w_400/v1495181697/FR/ChatbotImages/Q1/jardin-amenagement-exterieur.jpg',
              item_url: null,
              subtitle: 'Terrasse, abri\nPiscine\nPortail et clôture',
              buttons: [{ type: 'postback', title: 'Choisir', payload: 'cb49572a-e90f-4d95-a2b3-792c375b172d' }],
            },
            {
              title: 'Bilans et diagnostics',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_fill,g_west,h_440,w_400,x_214,y_146,z_0.9/v1495120787/FR/ChatbotImages/Q1/bilans-et-diagnostics.jpg',
              item_url: null,
              subtitle: 'Bilan thermique\nDiagnostic immobilier\nDiagnostic humidité',
              buttons: [{ type: 'postback', title: 'Choisir', payload: '99537930-f7d4-4bf5-a202-701049653861' }],
            },
          ],
        },
      },
    },
  },
]
export const firstKey = [
  {
    message: {
      text: 'C\u0027est parti ! Quel est votre projet ?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Fen\u00eatre',
          payload: '72259ea5-9ec5-45db-86d2-e26e2be15890',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Fen\u00eatre de toit (Type V\u00e9lux)',
          payload: 'c6a875d8-9afc-47a8-b6f5-20d585ca65dd',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Baie vitr\u00e9e et porte-fen\u00eatre',
          payload: 'd723709c-0e43-4de9-bae2-00363aa7f427',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Autre type de fen\u00eatre et ouverture',
          payload: 'db33bae3-60b4-4b23-a599-79abca23d1eb',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Double vitrage et vitrage',
          payload: '3044fe79-edee-4c93-af5c-8bbdc4183299',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Volet et store d\u0027int\u00e9rieur',
          payload: '7ed33b1b-7b3b-4412-b5f6-d0cd20557ac5',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Porte d\u0027entr\u00e9e et porte de service',
          payload: '2c3398f9-95ad-4a80-b0a9-c832aa9f5809',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Porte de garage',
          payload: '3f2d3a17-2883-4b63-ba1c-e7c76bd09a1e',
          image_url: null,
        },
      ],
    },
  },
]
export const conversations = {
  anonym: {
    sessionId: 'MOCK_SESSION_ID',
    conversation: [
      {
        message: { text: 'Bonjour, quel type de travaux souhaitez-vous faire ?' },
        answer: { text: 'Fen\u00eatres et ouvertures ext\u00e9rieures' },
      },
    ],
    createdAt: { date: '2017-07-28 15:45:05.000000', timezone_type: 3, timezone: 'UTC' },
    updatedAt: { date: '2017-07-28 15:45:06.000000', timezone_type: 3, timezone: 'UTC' },
    tracking: [],
  },
}
export const conversationsSummary = {
  anonym: {
    sessionId: 'MOCK_SESSION_ID',
    conversation: [
      {
        message: { text: 'Bonjour, quel type de travaux souhaitez-vous faire ?' },
        answer: { text: 'Fen\u00eatres et ouvertures ext\u00e9rieures' },
      },
      { message: { text: 'Quel est votre projet ?' }, answer: { text: 'Double vitrage et vitrage' } },
      {
        message: { text: 'S\u0027agit-il d\u0027une installation, d\u0027une r\u00e9paration ou d\u0027un entretien ?' },
        answer: { text: 'Installation - Remplacement' },
      },
      { message: { text: 'De quel type de vitrage s\u0027agit-il ?' }, answer: { text: 'Double vitrage' } },
      { message: { text: 'Quel type de bien est concern\u00e9 ?' }, answer: { text: 'Locaux et bureaux commerciaux' } },
      { message: { text: 'Quelle est votre situation personnelle ?' }, answer: { text: 'Locataire sans accord du propri\u00e9taire' } },
      { message: { text: 'Quel est votre ville ?' }, answer: { text: 'PARIS 17 (75017)' } },
    ],
    createdAt: { date: '2017-08-02 08:28:08.000000', timezone_type: 3, timezone: 'UTC' },
    updatedAt: { date: '2017-08-02 08:28:21.000000', timezone_type: 3, timezone: 'UTC' },
    tracking: [],
  },
}
export const currentSummary = [
  {
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic.summary',
          elements: [
            {
              title: 'Fen\u00eatres et ouvertures ext\u00e9rieures',
              image_url: 'https://res.cloudinary.com/quotatis/image/upload/c_crop,g_west,h_484,w_440,x_250/v1495181695/FR/ChatbotImages/Q1/fenetres-et-ouvertures-exterieures.jpg',
              item_url: null,
              subtitle: 'Bonjour, quel type de travaux souhaitez-vous faire ?\nFen\u00eatres et ouvertures ext\u00e9rieures\nQuel est votre projet ?\nDouble vitrage et vitrage\nS\u0027agit-il d\u0027une installation, d\u0027une r\u00e9paration ou d\u0027un entretien ?\nInstallation - Remplacement\nDe quel type de vitrage s\u0027agit-il ?\nDouble vitrage\nQuel type de bien est concern\u00e9 ?\nLocaux et bureaux commerciaux\nQuelle est votre situation personnelle ?\nLocataire sans accord du propri\u00e9taire\nQuel est votre ville ?\nPARIS 17 (75017)\n',
              buttons: [
                { type: 'web_url', title: 'Valider mon projet', url: '/project-prevalidate/MOCK_SESSION_ID' },
              ],
            },
          ],
        },
      },
    },
  },
]
export const current = [
  {
    message: {
      text: 'C\u0027est parti ! Quel est votre projet ?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Fen\u00eatre',
          payload: '72259ea5-9ec5-45db-86d2-e26e2be15890',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Fen\u00eatre de toit (Type V\u00e9lux)',
          payload: 'c6a875d8-9afc-47a8-b6f5-20d585ca65dd',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Baie vitr\u00e9e et porte-fen\u00eatre',
          payload: 'd723709c-0e43-4de9-bae2-00363aa7f427',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Autre type de fen\u00eatre et ouverture',
          payload: 'db33bae3-60b4-4b23-a599-79abca23d1eb',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Double vitrage et vitrage',
          payload: '3044fe79-edee-4c93-af5c-8bbdc4183299',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Volet et store d\u0027int\u00e9rieur',
          payload: '7ed33b1b-7b3b-4412-b5f6-d0cd20557ac5',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Porte d\u0027entr\u00e9e et porte de service',
          payload: '2c3398f9-95ad-4a80-b0a9-c832aa9f5809',
          image_url: null,
        },
        {
          content_type: 'text',
          title: 'Porte de garage',
          payload: '3f2d3a17-2883-4b63-ba1c-e7c76bd09a1e',
          image_url: null,
        },
      ],
    },
  },
]
