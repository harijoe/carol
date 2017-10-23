export const calculateBounds = polygons => {
  const { google } = window
  const bounds = new google.maps.LatLngBounds()
  polygons.forEach(polygon => polygon.forEach(latLng => bounds.extend(latLng)))
  return bounds
}

const fetchPostCodeGeoData = async postCode => {
  const response = await fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=correspondance-code-insee-code-postal&q=${postCode}`,
  )
  const json = await response.json()
  const records = json.records
  const { polygons, population, city } = records
    .filter(record => record.fields.postal_code.split('/').includes(postCode))
    .reduce((summary, record) => {
        // eslint-disable-next-line no-param-reassign
        summary.population += record.fields.population
        // eslint-disable-next-line no-param-reassign
        summary.city = record.fields.nom_comm
        record.fields.geo_shape.coordinates.forEach(polygon => summary.polygons.push(polygon.map(([x, y]) => ({ lat: y, lng: x }))))
        return summary
      },
      { polygons: [], population: 0 },
    )
  if (polygons.length === 0) {
    console.error(`Could not find data for postcode '${postCode}'`)
  }
  return { postCode, polygons, population, city }
}

const removeArrondissements = cityName => cityName.replace(/-+\d.*/, '')

const capitalize = name => name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

const humanize = city => capitalize(removeArrondissements(city))

const byPopulationSort = (cityA, cityB) => cityB.population - cityA.population

const extractCitiesOrderByPopulation = postCodesGeoData => postCodesGeoData
  .map(record => ({ city: humanize(record.city), population: record.population }))
  .reduce((allCities, record) => {
    const found = allCities.find(r => r.city === record.city)
    if (!found) {
      allCities.push(record)
    } else {
      found.population += record.population
    }
    return allCities
  }, []).sort(byPopulationSort).map(r => r.city)

const extractPolygons = postCodesGeoData => postCodesGeoData
  .map(result => result.polygons)
  .reduce((all, polys) => {
    polys.forEach(poly => all.push(poly))
    return all
  }, [])

const filterEmpty = records => records.filter(record => record.polygons.length > 0)

const fetchAll = postCodes => Promise.all(postCodes.map(fetchPostCodeGeoData))

export const fetchPostCodesGeoData = async postCodes => {
  const postCodesGeoData = await fetchAll(postCodes).then(filterEmpty)
  const polygons = extractPolygons(postCodesGeoData)
  const cities = extractCitiesOrderByPopulation(postCodesGeoData)
  return { polygons, cities }
}
