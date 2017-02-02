import dateFormat from 'dateformat'

const transformDate = (date, format = 'dd/mm/yyyy') => {
  if (!date) {
    return null
  }

  return dateFormat(date, format)
}

export default transformDate
