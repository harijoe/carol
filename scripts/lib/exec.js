import { exec } from 'child_process'

export default script => new Promise((resolve, reject) => {
  exec(script, (error, stdout, stderr) => {
    if (error) {
      reject(stderr)
    } else {
      resolve(stdout)
    }
  })
})
