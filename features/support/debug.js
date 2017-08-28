import { defineSupportCode } from 'cucumber'

defineSupportCode(({ After }) => {
  After({ timeout: 1000 * 1000 * 1000 }, async ({ status }) => {
    if (status === 'failed' && process.env.DEBUG) {
      await new Promise(() => {})
    }
  })
})
