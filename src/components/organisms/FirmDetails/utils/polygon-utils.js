export const calculateBounds = polygons => {
  const { google } = window
  const bounds = new google.maps.LatLngBounds()
  polygons.forEach(polygon => polygon.forEach(latLng => bounds.extend(latLng)))
  return bounds
}

export const createPolygonsFromGeoData = postCodesGeoData => postCodesGeoData.reduce((acc, geoData) => {
  geoData.polygons.forEach(polygon => acc.push(polygon))
  return acc
}, [])

