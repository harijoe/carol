import dateFormat from 'dateformat'

const transformDate = (date, format) => {
  if (!date) {
    return null
  }

  return dateFormat(date, format)
}

export default transformDate
