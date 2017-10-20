const fetchPostCodeGeoData = async postCode => {
  const response = await fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=correspondance-code-insee-code-postal&q=${postCode}`
  )
  const json = await response.json()
  const records = json.records
  const polygons = records
    .filter(record => record.fields.postal_code.split('/').includes(postCode))
    .reduce(
      (allPolygons, record) => {
        record.fields.geo_shape.coordinates.forEach(polygon => allPolygons.push(polygon.map(([x, y]) => ({ lat: y, lng: x }))))
        return allPolygons
      },
      []
    )
  if (polygons.length === 0) {
    console.error(`Could not find data for postcode '${postCode}'`)
  }
  return { postCode, polygons }
}

const fetchPostCodesGeoData = async postCodes =>
  Promise.all(postCodes.map(fetchPostCodeGeoData))
    .then(postCodesGeoData => postCodesGeoData.filter(postCodeGeoData => postCodeGeoData.polygons.length > 0))

export default fetchPostCodesGeoData
