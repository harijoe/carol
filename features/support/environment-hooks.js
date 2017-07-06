import { defineSupportCode } from 'cucumber'
import { reset as resetEnvironment } from '../lib/environment'

defineSupportCode(({ Before }) => {
  Before(resetEnvironment)
})
