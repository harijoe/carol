import merge from 'lodash/merge'

const ip = (typeof process.env.IP !== 'undefined' && process.env.IP.toString()) || '0.0.0.0'
const port = process.env.PORT || 80
const apiIp = (typeof process.env.API_IP !== 'undefined' && process.env.API_IP.toString()) || ip
const apiPort = process.env.API_PORT || 8080

const config = {
  all: {
    env: (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toString()) || 'development',
    baseUrl: `http://${ip}:${port}`,
    ip,
    port,
    api: {
      url: `http://${apiIp}:${apiPort}`,
      clientId: '4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
      clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
    },
    google: {
      mapsKey: 'AIzaSyD5R_CxRkMQR49reYM93SbKEC_DR37GsNI',
      recaptchaKey: '6Ldc6A0UAAAAAKYDpetCQRpnBcBb7Lbxs2uKHjkN',
      grantType: 'https://www.quotatis.com/google',
      clientId: '207076591339-2im88atidmkjth45lcbaoia59e2p0430.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/plus.login',
    },
    facebook: {
      grantType: 'https://www.quotatis.com/facebook',
      appId: '233630107058419',
      scope: 'public_profile, email, user_birthday, user_location',
    },
    defaultProUrl: 'https://www.quotatispro.co.uk',
    defaultLocale: 'en_GB',
    countries: {
      FR: {
        url: 'carol-fr.dev.quotatis.net',
        proUrl: 'https://www.quotatispro.fr',
        country: 'country.france',
      },
      ES: {
        url: 'carol-es.dev.quotatis.net',
        proUrl: 'https://www.quotatispro.es',
        country: 'country.spain',
      },
      GB: {
        url: 'carol-co-uk.dev.quotatis.net',
        proUrl: 'https://www.quotatispro.co.uk',
        country: 'country.great_britain',
      },
    },
    hostnamesLocales: {
      'carol-fr.dev.quotatis.net': 'fr_FR',
      'carol-es.dev.quotatis.net': 'es_ES',
      'carol-co-uk.dev.quotatis.net': 'en_GB',
    },
  },
  staging: {
    baseUrl: 'carol-fr.preprod.qarx.io',
    api: {
      url: 'http://api.preprod.qarx.io',
    },
    countries: {
      FR: {
        url: 'carol-fr.dev.preprod.qarx.io',
      },
      ES: {
        url: 'carol-es.dev.preprod.qarx.io',
      },
      GB: {
        url: 'carol-co-uk.preprod.qarx.io',
      },
    },
    hostnamesLocales: {
      'carol-fr.preprod.qarx.io': 'fr_FR',
      'carol-es.preprod.qarx.io': 'es_ES',
      'carol-co-uk.preprod.qarx.io': 'en_GB',
    },
  },
  production: {
    baseUrl: 'https://www.quotatis.com',
    api: {
      url: 'https://api.quotatis.com',
    },
  },
}

module.exports = exports = merge(config.all, config[config.all.env])

export default exports
