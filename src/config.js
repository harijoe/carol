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
      url: `http://${apiIp}:${apiPort}/app_dev.php`,
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
    defaultProUrl: 'https://www.quotatispro.co.uk',
    defaultLocale: 'en_GB',
    countries: {
      FR: {
        url: 'http://carol-fr.dev.quotatis.net',
        proUrl: 'https://www.quotatispro.fr',
        country: 'country.france',
      },
      ES: {
        url: 'http://carol-es.dev.quotatis.net',
        proUrl: 'https://www.quotatispro.es',
        country: 'country.spain',
      },
      GB: {
        url: 'http://carol-co-uk.dev.quotatis.net',
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
    baseUrl: 'carol-fr.qarx.io',
    api: {
      url: 'https://api.qarx.io',
    },
    countries: {
      FR: {
        url: 'https://carol-fr.qarx.io',
      },
      ES: {
        url: 'https://carol-es.qarx.io',
      },
      GB: {
        url: 'https://carol-co-uk.qarx.io',
      },
    },
    hostnamesLocales: {
      'carol-fr.qarx.io': 'fr_FR',
      'carol-es.qarx.io': 'es_ES',
      'carol-co-uk.qarx.io': 'en_GB',
    },
  },
  production: {
    baseUrl: 'https://www.quotatis.com',
    api: {
      url: 'https://api.quotatis.com',
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
