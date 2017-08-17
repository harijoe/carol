import isomorphicFetch from 'isomorphic-fetch'

export default async (city, postalCode) => {
  const response = await isomorphicFetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},${postalCode}&sensor=false`)
  const json = await response.json()

  return json.results[0].geometry.location
}
