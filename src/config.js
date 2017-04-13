import merge from 'lodash/merge'

const config = {
  all: {
    env: (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toString()) || 'development',
    ip: (typeof process.env.IP !== 'undefined' && process.env.IP.toString()) || '0.0.0.0',
    port: process.env.PORT || 443,
    basename: `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/'), // Accepts: '/', '/path', 'path', undefined,
    browser: typeof window !== 'undefined',
    api: {
      url: 'https://api-dev.qarx.io:8080/app_dev.php',
      clientId: '4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
      clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
    },
    ssl: {
      privateKey: 'ssl/qarx.io.key',
      certificate: 'ssl/qarx.io.crt',
    },
    google: {
      mapsKey: 'AIzaSyCYrFIvVAYqnWCNjjAfGIanmwxVvj1FPj8',
      recaptchaKey: '6LctdA0UAAAAAMrXgwLpRnYl6KakExQn8kPRcSmN',
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
    contentSiteUrl: 'https://conseils-travaux.quotatis.fr/',
    defaultProUrl: 'https://www.quotatispro.co.uk',
    defaultLocale: 'en_GB',
    locales: {
      fr_FR: {
        url: 'https://carol-fr-dev.qarx.io',
        proUrl: 'https://www.quotatispro.fr',
        contentUrl: 'http://api-service.hugo.qarx.io/fr/',
        countryLabel: 'country.france',
      },
      es_ES: {
        url: 'https://carol-es-dev.qarx.io',
        proUrl: 'https://www.quotatispro.es',
        contentUrl: 'http://api-service.hugo.qarx.io/es/',
        countryLabel: 'country.spain',
      },
      en_GB: {
        url: 'https://carol-co-uk-dev.qarx.io',
        proUrl: 'https://www.quotatispro.co.uk',
        contentUrl: 'http://api-service.hugo.qarx.io/uk/',
        countryLabel: 'country.great_britain',
      },
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
      url: 'https://api-prod.qarx.io/',
    },
    locales: {
      fr_FR: {
        url: 'https://carol-fr-prod.qarx.io',
      },
      es_ES: {
        url: 'https://carol-es-prod.qarx.io',
      },
      en_GB: {
        url: 'https://carol-co-uk-prod.qarx.io',
      },
    },
    ssl: {
      privateKey: 'ssl/quotatis.com.key',
      certificate: 'ssl/quotatis.com.crt',
    },
  },
}

module.exports = exports = merge(config.all, config[config.all.env])

export default exports
