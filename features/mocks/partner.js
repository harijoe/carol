export default {
  '@context': '/contexts/Partner',
  '@id': '/partners',
  '@type': 'hydra:Collection',
  'hydra:member': [
    {
      '@id': '/partners/7706aff8-90d0-44a5-aafa-60e2cededef4',
      '@type': 'Partner',
      acqSource: 'LM',
      headerLink: 'http://res.cloudinary.com/quotatis/image/upload/v1499860659/partner/Leroy_Merlin.svg',
      headerText: 'Votre projet en partenariat avec',
      countryCode: 'FR',
    },
  ],
  'hydra:totalItems': 1,
  'hydra:view': { '@id': '/partners?acqSource=LM\u0026countryCode=FR', '@type': 'hydra:PartialCollectionView' },
  'hydra:search': {
    '@type': 'hydra:IriTemplate',
    'hydra:template':
      '/partners{?acqSource,acqSource[],countryCode,countryCode[],order[acqSource],order[headerLink],order[headerText],order[id],order[countryCode]}',
    'hydra:variableRepresentation': 'BasicRepresentation',
    'hydra:mapping': [
      {
        '@type': 'IriTemplateMapping',
        variable: 'acqSource',
        property: 'acqSource',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'acqSource[]',
        property: 'acqSource',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'countryCode',
        property: 'countryCode',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'countryCode[]',
        property: 'countryCode',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'order[acqSource]',
        property: 'acqSource',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'order[headerLink]',
        property: 'headerLink',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'order[headerText]',
        property: 'headerText',
        required: false,
      },
      {
        '@type': 'IriTemplateMapping',
        variable: 'order[id]',
        property: 'id',
        required: false,
      },
      { '@type': 'IriTemplateMapping', variable: 'order[countryCode]', property: 'countryCode', required: false },
    ],
  },
}
