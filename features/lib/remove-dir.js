import fs from 'fs'
import rimraf from 'rimraf'
import promisify from '../lib/promisify'

export default async dir => {
  try {
    await promisify(fs.readdir)(dir)
    console.info(`Removing ${dir} directory`)
    await promisify(rimraf)(dir)
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e
    }
  }
}
