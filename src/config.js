const baseUrl = 'http://localhost'
const apiUrl = 'http://localhost:8080/app_dev.php'

const config = {
  baseUrl,
  apiUrl,
  clientId: '4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
  clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
  profileUrl: `${apiUrl}/users/me`,
  timeout: 20000,
  googleMapsApiKey: 'AIzaSyBjl5j6n56z0DpGtImygG_AFU85GJw6tOk'
}

export const proUrl = {
  FR: 'https://www.quotatispro.fr',
  ES: 'https://www.quotatispro.es',
  GB: 'https://www.quotatispro.co.uk',
  DEFAULT: 'https://www.quotatispro.co.uk'
}

export const defaultLocale = 'en_GB'
export const hostnamesLocales = {
  'quotatis_dev.fr': 'fr_FR',
  'quotatis_dev.es': 'es_ES',
  'quotatis_dev.co.uk': 'en_GB'
}

export default config
