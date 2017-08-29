export const toValidate = {
  '@context': '/contexts/Project',
  '@id': '/projects/MOCK_PROJECT_ID',
  '@type': 'Project',
  name: 'Porte d\u0027entr\u00e9e et porte de service',
  leadReference: null,
  status: 'to_validate',
  startTimeframe: null,
  purpose: null,
  duplicate: false,
  createdAt: '2017-08-02T09:34:33+00:00',
  updatedAt: '2017-08-02T09:34:33+00:00',
  sqn: null,
  imageUrl: null,
  questionsAnswers: {
    'Bonjour, quel type de travaux souhaitez-vous faire ?': 'Fen\u00eatres et ouvertures ext\u00e9rieures',
    'Quel est votre projet ?': 'Porte d\u0027entr\u00e9e et porte de service',
    'S\u0027agit-il d\u0027une porte d\u0027entr\u00e9e ou de service ?': 'Porte d\u0027entr\u00e9e',
    'Quelle mati\u00e8re pr\u00e9f\u00e9rez-vous ?': 'J\u0027ai besoin du conseil d\u0027un pro',
    'Souhaitez-vous que votre porte soit blind\u00e9e ?': 'J\u0027ai besoin du conseil d\u0027un pro',
    'Quel niveau de gamme souhaitez-vous ?': 'Premium - Haute qualit\u00e9',
    'Quel type de bien est concern\u00e9 ?': 'Locaux et bureaux commerciaux',
    'Quelle est votre situation personnelle ?': 'Mandat\u00e9 par ma soci\u00e9t\u00e9',
    'Quel est votre ville ?': 'PARIS 17 (75017)',
  },
  comment: null,
  postalCode: {
    '@id': '/postal_codes/3f1942d4-e055-459d-a18d-57cdf3c70938',
    '@type': 'PostalCode',
    postalCode: '75017',
    city: 'PARIS 17',
    countryCode: 'FR',
  },
  proForm: {
    '@id': '/pro_forms/02f6edf6-8e18-40d2-be2c-8dcc3f16d6b4',
    '@type': 'ProForm',
    legacyId: 12504,
    label: 'Porte d\u0027entr\u00e9e',
    countryCode: 'FR',
  },
  chatbotStorage: { countryCode: 'FR' },
  user: '/users/me',
  firms: [],
  partner: null,
  acqActivity: null,
  countryCode: 'FR',
}

export const toValidateWithInformations = {
  '@context': '/contexts/Project',
  '@id': '/projects/MOCK_PROJECT_ID',
  '@type': 'Project',
  name: 'Porte d\u0027entr\u00e9e et porte de service',
  leadReference: null,
  status: 'to_validate',
  startTimeframe: 'now',
  purpose: 'quotation',
  duplicate: false,
  createdAt: '2017-08-02T09:34:33+00:00',
  updatedAt: '2017-08-02T09:34:33+00:00',
  sqn: null,
  imageUrl: null,
  questionsAnswers: {
    'Bonjour, quel type de travaux souhaitez-vous faire ?': 'Fen\u00eatres et ouvertures ext\u00e9rieures',
    'Quel est votre projet ?': 'Porte d\u0027entr\u00e9e et porte de service',
    'S\u0027agit-il d\u0027une porte d\u0027entr\u00e9e ou de service ?': 'Porte d\u0027entr\u00e9e',
    'Quelle mati\u00e8re pr\u00e9f\u00e9rez-vous ?': 'J\u0027ai besoin du conseil d\u0027un pro',
    'Souhaitez-vous que votre porte soit blind\u00e9e ?': 'J\u0027ai besoin du conseil d\u0027un pro',
    'Quel niveau de gamme souhaitez-vous ?': 'Premium - Haute qualit\u00e9',
    'Quel type de bien est concern\u00e9 ?': 'Locaux et bureaux commerciaux',
    'Quelle est votre situation personnelle ?': 'Mandat\u00e9 par ma soci\u00e9t\u00e9',
    'Quel est votre ville ?': 'PARIS 17 (75017)',
  },
  comment: null,
  postalCode: {
    '@id': '/postal_codes/3f1942d4-e055-459d-a18d-57cdf3c70938',
    '@type': 'PostalCode',
    postalCode: '75017',
    city: 'PARIS 17',
    countryCode: 'FR',
  },
  proForm: {
    '@id': '/pro_forms/02f6edf6-8e18-40d2-be2c-8dcc3f16d6b4',
    '@type': 'ProForm',
    legacyId: 12504,
    label: 'Porte d\u0027entr\u00e9e',
    countryCode: 'FR',
  },
  chatbotStorage: { countryCode: 'FR' },
  user: '/users/me',
  firms: [],
  partner: null,
  acqActivity: null,
  countryCode: 'FR',
}

export const validated = {
  '@context': '/contexts/Project',
  '@id': '/projects/MOCK_PROJECT_ID',
  '@type': 'Project',
  name: 'Radiateur et sèche-serviette',
  leadReference: null,
  status: 'validated',
  startTimeframe: '3_to_6_months',
  purpose: 'quotation',
  duplicate: false,
  createdAt: '2017-08-09T13:12:28+00:00',
  updatedAt: '2017-08-09T13:17:06+00:00',
  sqn: null,
  imageUrl: null,
  questionsAnswers: {
    'Bonjour, quel type de travaux souhaitez-vous faire ?': 'Isolation, chauffage, climatisation',
    'Quel est votre projet ?': 'Radiateur et sèche-serviette',
    'Plus précisément, s\u0027agit-il d\u0027un radiateur ou d\u0027un sèche-serviette ?': 'Radiateur',
    'S\u0027agit-il d\u0027une installation, d\u0027une réparation ou d\u0027un entretien ?': 'Entretien - Maintenance',
    'Quel système de chauffage possédez-vous ?': 'Je ne sais pas',
    'Actuellement, quelle est l\u0027énergie de votre chauffage ?': 'Autre - Je ne sais pas',
    'Si vous envisagez de changer de chauffage, quelle énergie souhaiteriez-vous ?': 'Autre - Je n\u0027envisage pas de changer',
    'Quel type de bien est concerné ?': 'Autre type de bien',
    'Quelle est votre situation personnelle ?': 'Mandaté par ma société',
    'Quelle est votre ville ?': 'PARIS 17 (75017)',
  },
  comment: null,
  postalCode: {
    '@id': '/postal_codes/3f1942d4-e055-459d-a18d-57cdf3c70938',
    '@type': 'PostalCode',
    postalCode: '75017',
    city: 'PARIS 17',
    countryCode: 'FR',
  },
  proForm: { '@id': '/pro_forms/2d6fa3b0-e568-4b5a-a391-6e99336d1180', '@type': 'ProForm', countryCode: 'FR' },
  chatbotStorage: '/chatbot_storages/conversation/8f2638c6-a58d-46ad-a2ba-a182e035bab4',
  user: '/users/dd80655c-9a65-4cea-be38-6b33e12633b9',
  leadSales: [],
  partner: null,
  acqActivity: null,
  countryCode: 'FR',
}