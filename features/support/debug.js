import { defineSupportCode, Status } from 'cucumber'

const keyPressed = () => new Promise(resolve => {
  const stdin = process.openStdin()
  stdin.setRawMode(true)
  stdin.resume()
  stdin.on('data', resolve)
})


defineSupportCode(({ After }) => {
  After({ timeout: 1000 * 1000 * 1000 }, async ({ result: { status } }) => {
    if (status === Status.FAILED && process.env.DEBUG) {
      console.info('\nFailure detected while in DEBUG mode - Hit any key')
      await keyPressed()
    }
  })
})
