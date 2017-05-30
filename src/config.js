import merge from 'lodash/merge'

const config = {
  all: {
    env: (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toString()) || 'development',
    ip: (typeof process.env.IP !== 'undefined' && process.env.IP.toString()) || '0.0.0.0',
    port: process.env.PORT || 443,
    browser: typeof window !== 'undefined',
    assetPath: '',
    api: {
      url: 'https://api-dev.qarx.io:8080',
      clientId: '4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
      clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
    },
    ssl: {
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
        GB: 'GTM-N58NQW',
        ES: 'GTM-N58NQW',
      },
    },
    facebook: {
      grantType: 'https://www.quotatis.com/facebook',
      appId: '233630107058419',
      scope: 'public_profile, email, user_birthday, user_location',
    },
    cloudinaryUrl: 'https://res.cloudinary.com/quotatis/image/upload/FrontApp/',
    contentSiteUrl: 'https://www.quotatis.fr/conseils-travaux/',
    defaultProUrl: 'https://www.quotatispro.co.uk',
    defaultLocale: 'en_GB',
    locales: {
      fr_FR: {
        url: 'https://carol-fr-dev.qarx.io',
        proUrl: 'https://www.quotatispro.fr',
        contentUrl: 'http://api-service.qarx.io/fr/',
        countryLabel: 'country.france',
      },
      es_ES: {
        url: 'https://carol-es-dev.qarx.io',
        proUrl: 'https://www.quotatispro.es',
        contentUrl: 'http://api-service.qarx.io/es/',
        countryLabel: 'country.spain',
      },
      en_GB: {
        url: 'https://carol-co-uk-dev.qarx.io',
        proUrl: 'https://www.quotatispro.co.uk',
        contentUrl: 'http://api-service.qarx.io/uk/',
        countryLabel: 'country.great_britain',
      },
    },
    purgeCacheToken: '41Xdkf2c7lflo2o065BTV21y6V6xhg9t',
    socialNetworksUrls: {
      facebook: 'https://www.facebook.com/Quotatis.FR/',
      twitter: 'https://twitter.com/quotatisfr',
      linkedin: 'https://www.linkedin.com/company-beta/50071/',
      instagram: 'https://www.instagram.com/quotatis/',
    },
  },
  staging: {
    api: {
      url: 'https://api.qarx.io',
    },
    locales: {
      fr_FR: {
        url: 'https://carol-fr.qarx.io',
      },
      es_ES: {
        url: 'https://carol-es.qarx.io',
      },
      en_GB: {
        url: 'https://carol-co-uk.qarx.io',
      },
    },
  },
  production: {
    api: {
      url: 'https://api.quotatis.com',
      clientId: '21ujn3bgfgjoc8w08s0wgkwgc8s8g4gscggcc4skog8c0g4k8c',
      clientSecret: '5fbpmtbpwkcg0w8gk8ssg44084okg8co4koccssgws8ko0c440',
    },
    locales: {
      fr_FR: {
        url: 'https://www.quotatis.fr',
      },
      es_ES: {
        url: 'https://www.quotatis.es',
      },
      en_GB: {
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
      privateKey: 'ssl/quotatis.com.key',
      certificate: 'ssl/quotatis.com.crt',
      intermediate: 'ssl/quotatis.intermediate.com.crt',
    },
    assetPath: 'https://assets.quotatis.com',
  },
}

module.exports = exports = merge(config.all, config[config.all.env])

export default exports
