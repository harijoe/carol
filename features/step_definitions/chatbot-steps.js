import { defineSupportCode } from 'cucumber'
import simulado from 'simulado'

import client from '../lib/promisified-nightwatch-client'
import * as chatbot from '../mocks/chatbot'
import getAppUrl from '../lib/app'
import paths from '../lib/paths'

const reachedProjectSummary = async () => {
  await simulado.mock({
    method: 'POST',
    path: '/chatbot',
    response: chatbot.currentSummary,
    conditionalRequestBody: {
      channel: 'project',
      message: { text: 'new_project.current' },
      user: 'MOCK_SESSION_ID',
    },
  })
  await simulado.mock({
    path: '/chatbot_storages/conversation/',
    response: chatbot.conversationsSummary,
  })
}

defineSupportCode(({ Given }) => {
  Given(/I start a conversation with the first key-one slide/, async () => {
    await client.click('.hero .slick-slide:nth-child(1)')
    await simulado.mock({
      path: '/chatbot_storages/conversation/MOCK_SESSION_ID',
      response: chatbot.conversations,
    })
  })


  Given(/I finished my conversation/, async () => {
    await simulado.mock({
      path: '/chatbot_storages/conversation/MOCK_SESSION_ID',
      status: 404,
    })
  })

  Given(/I reached the project summary in my conversation/, reachedProjectSummary)

  Given(/I opened the chatbot popin/, async () => {
    await reachedProjectSummary()
    await client.url(getAppUrl(paths.chatbot))
    await new Promise(resolve => setTimeout(resolve, 500)) // Necessary, probably to wait the project summary animation finishes
    await client.click('xpath', "//*[contains(text(), 'Valider mon projet')]")
  })
})
