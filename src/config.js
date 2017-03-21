import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'
const ip = (typeof process.env.IP !== 'undefined' && process.env.IP.toString()) || '0.0.0.0'
const port = process.env.PORT || 443
const basename = `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/') // Accepts: '/', '/path', 'path', undefined

const config = {
  all: {
    env: (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toString()) || 'development',
    baseUrl: `https://${ip}:${port}`,
    ip,
    port,
    basename,
    browser,
    api: {
      url: 'https://api-dev.qarx.io:8080/app_dev.php',
      clientId: '4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
      clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
    },
    ssl: {
      privateKey: 'ssl/qarx.io.key',
      certificate: 'ssl/qarx.io.crt',
      intermediate: 'ssl/qarx.io.intermediate.crt',
    },
    google: {
      mapsKey: 'AIzaSyCYrFIvVAYqnWCNjjAfGIanmwxVvj1FPj8',
      recaptchaKey: '6LctdA0UAAAAAMrXgwLpRnYl6KakExQn8kPRcSmN',
      grantType: 'https://www.quotatis.com/google',
      clientId: '726740106708-5fh1f42gq45ek5a5g2p7olldjt679qjg.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/plus.login',
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
        contentUrl: 'https://fr.content.hugo.preprod.qarx.io/',
        countryLabel: 'country.france',
      },
      es_ES: {
        url: 'https://carol-es-dev.qarx.io',
        proUrl: 'https://www.quotatispro.es',
        contentUrl: 'https://es.content.hugo.preprod.qarx.io/',
        countryLabel: 'country.spain',
      },
      en_GB: {
        url: 'https://carol-co-uk-dev.qarx.io',
        proUrl: 'https://www.quotatispro.co.uk',
        contentUrl: 'https://uk.content.hugo.preprod.qarx.io/',
        countryLabel: 'country.great_britain',
      },
    },
  },
  staging: {
    baseUrl: 'carol-fr.qarx.io',
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
    baseUrl: 'https://www.quotatis.com',
    api: {
      url: 'https://api.quotatis.com',
    },
    locales: {
      fr_FR: {
        contentUrl: 'https://conseils-travaux.quotatis.fr',
      },
      es_ES: {
        contentUrl: 'https://advice.quotatis.co.uk',
      },
      en_GB: {
        contentUrl: 'https://consejos-reformas.quotatis.es',
      },
    },
    ssl: {
      privateKey: 'ssl/quotatis.com.key',
      certificate: 'ssl/quotatis.com.crt',
      intermediate: 'ssl/quotatis.com.intermediate.crt',
    },
  },
}

module.exports = exports = merge(config.all, config[config.all.env])

export default exports
