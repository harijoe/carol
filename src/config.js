import merge from 'lodash/merge'

import { fr, en, es } from './i18n/config'

const configs = {
  all: {
    env: process.env.NODE_ENV || 'development',
    ip: process.env.IP || '0.0.0.0',
    port: 443,
    browser: typeof window !== 'undefined',
    assetPath: '',
    devServer: true,
    api: {
      debug: !!process.env.API_DEBUG,
      url: 'https://api-dev.qarx.io:8080',
      clientId: '4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
      clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
    },
    ssl: {
      enabled: true,
      privateKey: 'ssl/qarx.io.key',
      certificate: 'ssl/qarx.io.crt',
      intermediate: 'ssl/qarx.intermediate.io.crt',
    },
    google: {
      mapsKey: 'AIzaSyCYrFIvVAYqnWCNjjAfGIanmwxVvj1FPj8',
      grantType: 'https://www.quotatis.com/google',
      clientId: '726740106708-5fh1f42gq45ek5a5g2p7olldjt679qjg.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/plus.login',
      tagManagerId: {
        FR: 'GTM-N58NQW',
        GB: 'GTM-TT49Z3S',
        ES: 'GTM-K9GWBNM',
      },
    },
    facebook: {
      grantType: 'https://www.quotatis.com/facebook',
      appId: '233630107058419',
      scope: 'public_profile, email, user_birthday, user_location',
    },
    algolia: {
      apiKey: '833cbf062e3b7c3979155c0d07e3f058',
      projectFlowIndex: 'qa_ProjectFlow_dev',
    },
    cloudinary: {
      url: 'https://res.cloudinary.com/quotatis/image/upload',
      app: 'FrontApp',
    },
    defaultLocale: 'en-GB',
    locales: {
      'fr-FR': fr,
      'en-GB': en,
      'es-ES': es,
    },
    purgeCacheToken: '41Xdkf2c7lflo2o065BTV21y6V6xhg9t',
    termsUrl: 'https://www.quotatis.fr/conseils-travaux/cgu',
    cookiesUrl: 'https://www.quotatis.fr/conseils-travaux/cgu#cookies',
  },
  qa: {
    devServer: false,
    api: {
      url: 'https://api.qarx.io',
    },
    locales: {
      'fr-FR': {
        url: 'https://carol-fr.qarx.io',
      },
      'es-ES': {
        url: 'https://carol-es.qarx.io',
      },
      'en-GB': {
        url: 'https://carol-co-uk.qarx.io',
      },
    },
    algolia: {
      projectFlowIndex: 'qa_ProjectFlow_dev',
    },
  },
  preprod: {
    port: 443,
    devServer: false,
    locales: {
      'fr-FR': {
        url: 'https://preprod-fr.qarx.io',
      },
      'es-ES': {
        url: 'https://preprod-es.qarx.io',
      },
      'en-GB': {
        url: 'https://preprod-co-uk.qarx.io',
      },
    },
    algolia: {
      projectFlowIndex: 'preprod_ProjectFlow_prod',
    },
  },
  production: {
    port: 80,
    devServer: false,
    api: {
      url: 'https://api.quotatis.com',
      clientId: '21ujn3bgfgjoc8w08s0wgkwgc8s8g4gscggcc4skog8c0g4k8c',
      clientSecret: '5fbpmtbpwkcg0w8gk8ssg44084okg8co4koccssgws8ko0c440',
    },
    locales: {
      'fr-FR': {
        url: 'https://www.quotatis.fr',
      },
      'es-ES': {
        url: 'https://www.quotatis.es',
      },
      'en-GB': {
        url: 'https://www.quotatis.co.uk',
      },
    },
    google: {
      mapsKey: 'AIzaSyAsFOnh8HufqRe55p_7rCOQG0nxz22px4Q',
      clientId: '726740106708-1197l2ohju4kcpod6ugq2k87675t6ibs.apps.googleusercontent.com',
    },
    facebook: {
      appId: '297437357370490',
    },
    ssl: {
      enabled: false,
    },
    assetPath: 'https://assets.quotatis.com',
    algolia: {
      projectFlowIndex: 'prod_ProjectFlow_prod',
    },
  },
  development: {
    port: 4433,
    api: {
      url: 'https://api.qarx.io',
    },
    locales: {
      'fr-FR': {
        url: 'https://carol-fr-dev.qarx.io:4433',
      },
      'en-GB': {
        url: 'https://carol-co-uk-dev.qarx.io:4433',
      },
      'es-ES': {
        url: 'https://carol-es-dev.qarx.io:4433',
      },
    },
  },
  outsideDocker: {
    port: 4433,
    locales: {
      'fr-FR': {
        url: 'https://carol-fr-dev.qarx.io:4433',
      },
      'en-GB': {
        url: 'https://carol-co-uk-dev.qarx.io:4433',
      },
      'es-ES': {
        url: 'https://carol-es-dev.qarx.io:4433',
      },
    },
  },
  insideDocker: {
    // inherits everything from `config.all` above
  },
  mocks: {
    api: {
      url: 'http://carol-fr-dev.qarx.io:7001',
    },
    locales: {
      'fr-FR': {
        url: 'http://carol-fr-dev.qarx.io:4321',
      },
      'en-GB': {
        url: 'http://carol-co-uk-dev.qarx.io:4321',
      },
      'es-ES': {
        url: 'http://carol-es-dev.qarx.io:4321',
      },
    },
    port: 4321,
    ssl: {
      enabled: false,
    },
    mocking: true,
  },
  travis: {
    devServer: false,
    api: {
      url: 'http://carol-fr-dev.qarx.io:7001',
    },
    locales: {
      'fr-FR': {
        url: 'http://carol-fr-dev.qarx.io:4321',
      },
      'en-GB': {
        url: 'http://carol-co-uk-dev.qarx.io:4321',
      },
      'es-ES': {
        url: 'http://carol-es-dev.qarx.io:4321',
      },
    },
    port: 4321,
    ssl: {
      enabled: false,
    },
    mocking: true,
  },
}

const config = merge(configs.all, configs[configs.all.env])

config.port = (process.env.PORT && parseInt(process.env.PORT, 10)) || config.port

module.exports = config

export default config
