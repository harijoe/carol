import path from 'path'
import cloudinary from 'cloudinary'
import { defineSupportCode, Status } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import promisify from '../lib/promisify'

const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, TRAVIS_BUILD_NUMBER, CIRCLE_BUILD_NUM } = process.env

cloudinary.config({
  cloud_name: 'quotatis',
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

const CI_BUILD_NUMBER = TRAVIS_BUILD_NUMBER || CIRCLE_BUILD_NUM

defineSupportCode(({ After }) => {
  After(async scenarioResult => {
    const { scenario, status } = scenarioResult
    if (status === Status.FAILED) {
      const name = scenario.uri.replace(path.resolve('.', 'test/features'), '').replace(/^\//, '')
      const filename = path.resolve('build', `${path.basename(name)}:${scenario.line}.png`)
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
