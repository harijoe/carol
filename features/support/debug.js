import { defineSupportCode, Status } from 'cucumber'

defineSupportCode(({ After }) => {
  After({ timeout: 1000 * 1000 * 1000 }, async ({ result: { status } }) => {
    if (status === Status.FAILED && process.env.DEBUG) {
      console.info('\nFailure detected while in DEBUG mode. Press Ctrl+C to interrupt.')
      await new Promise(() => {})
    }
  })
})
