import date, { isLeapYear, daysInMonth } from './date'

describe('leap year', () => {
  const expectLeapYears = (...years) => years.forEach(year => it(year, () => expect(isLeapYear(year)).toBe(true)))
  const expectCommonYears = (...years) => years.forEach(year => it(year, () => expect(isLeapYear(year)).toBe(false)))

  describe('leap years', () => {
    expectLeapYears(1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016)
  })
  describe('common years', () => {
    expectCommonYears(2006, 2007, 2009, 2010, 2011, 2013, 2014, 2015, 2017, 2018, 2019)
  })
})

describe('days in months', () => {
  const monthName = month => new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(2017, month - 1, 1))
  const expectDaysInMonth = (month, year, days) =>
    it(`${days} days in ${monthName(month)} ${year}`, () => expect(daysInMonth(month, year)).toEqual(days))

  expectDaysInMonth(1, 2017, 31)
  expectDaysInMonth(2, 2016, 29)
  expectDaysInMonth(2, 2017, 28)
  expectDaysInMonth(3, 2017, 31)
  expectDaysInMonth(4, 2017, 30)
  expectDaysInMonth(5, 2017, 31)
  expectDaysInMonth(6, 2017, 30)
  expectDaysInMonth(7, 2017, 31)
  expectDaysInMonth(8, 2017, 31)
  expectDaysInMonth(9, 2017, 30)
  expectDaysInMonth(10, 2017, 31)
  expectDaysInMonth(11, 2017, 30)
  expectDaysInMonth(12, 2017, 31)
})

describe('date validator', () => {
  const dateValidationError = (day, month, year) => date(undefined, { birthdateDay: day, birthdateMonth: month, birthdateYear: year })
  const expectValid = (scenario, ...args) =>
    it(scenario, () => {
      expect(dateValidationError(...args)).toBeFalsy()
    })
  const expectInvalid = (scenario, ...args) =>
    it(scenario, () => {
      const validationError = dateValidationError(...args)

      expect(validationError).toBeTruthy()
      expect(validationError.id).toBe('validators.user.birthdate.invalid_date')
    })

  describe('validates correct dates', () => {
    expectValid('first day of year', '1', '1', '1967')
    expectValid('last day in Feb', '28', '02', '1967')
    expectValid('last day in Feb on leap year', '29', '2', '1968')
    expectValid('empty', undefined, undefined, undefined)
  })

  describe('invalid dates', () => {
    expectInvalid('32 of January', '32', '01', '1967')
    expectInvalid('0 of January', '0', '01', '1967')
    expectInvalid('last day in february + 1', '29', '02', '1967')
    expectInvalid('partially filled', '1', undefined, undefined)
  })
})
