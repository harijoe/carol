export const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

export const daysInMonth = (month, year) => {
  switch (month) {
    case 2:
      return isLeapYear(year) ? 29 : 28
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    default:
      return 31
  }
}

export default (_, { birthdateDay, birthdateMonth, birthdateYear }) => {
  const error = { id: 'validators.user.birthdate.invalid_date', values: {} }
  const empty = field => field === ''

  if ([birthdateDay, birthdateMonth, birthdateYear].every(empty)) return false
  if ([birthdateDay, birthdateMonth, birthdateYear].some(empty)) return error

  const [day, month, year] = [birthdateDay, birthdateMonth, birthdateYear].map(d => parseInt(d, 10))
  const isInvalid = month < 1 || month > 12 || day < 1 || day > daysInMonth(month, year)
  return isInvalid && error
}
