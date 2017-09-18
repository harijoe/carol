import path from 'path'
import cloudinary from 'cloudinary'
import { defineSupportCode, Status } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import promisify from '../lib/promisify'
import removeDir from '../lib/remove-dir'

const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, TRAVIS_BUILD_NUMBER, CIRCLE_BUILD_NUM } = process.env

const SCREENSHOTS_DIR = 'screenshots'

cloudinary.config({
  cloud_name: 'quotatis',
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

const CI_BUILD_NUMBER = TRAVIS_BUILD_NUMBER || CIRCLE_BUILD_NUM

defineSupportCode(({ BeforeAll, After }) => {
  BeforeAll(() => removeDir(SCREENSHOTS_DIR))

  After(async scenario => {
    const { sourceLocation, result } = scenario
    const { status } = result
    const { uri, line } = sourceLocation
    if (status === Status.FAILED) {
      const name = uri.replace(path.resolve('.', 'test/features'), '').replace(/^\//, '')
      const filename = path.resolve(SCREENSHOTS_DIR, `${path.basename(name)}:${line}.png`)
      console.info(`screenshot of current page stored at '${filename}'`)
      await client.saveScreenshot(filename)
      if (CI_BUILD_NUMBER) {
        const upload = await promisify(cloudinary.v2.uploader.upload)(filename, {
          folder: `builds/carol/${CI_BUILD_NUMBER}/cucumber`,
          use_filename: true,
          unique_filename: false,
          tags: ['cucumber', 'carol', CI_BUILD_NUMBER],
        })
        console.info(`screenshot uploaded at ${upload.secure_url}`)
      }
    }
  })
})
