const baseUrl = 'http://localhost'
const apiUrl = `${baseUrl}/app_dev.php`
const config = {
  baseUrl,
  apiUrl,
  clientId: '1_4qhq3n20xi4gww0gokc0k44k0ss48ssw4g88kgg8kkkscgco0k',
  clientSecret: '4aoyh39n19usgos8ss0osscwg8ogkgkg0wcw0wkkg0kkow8gwc',
  profileUrl: `${apiUrl}/users/me`,
  timeout: 20000
}

export default config
