import { defineSupportCode } from 'cucumber'
import simulado from 'simulado'
import * as chatbot from '../mocks/chatbot'
import driver from '../lib/driver'

defineSupportCode(({ Given }) => {
  Given(/I start a conversation with the first key-one slide/, async () => {
    const elements = await driver.findElements({ css: '.hero .slick-slide' })
    await elements[0].click()
    await simulado.mock({
      path: '/chatbot-conversations/MOCK_SESSION_ID',
      response: chatbot.conversations,
    })
  })
  Given(/I reached the project summary in my conversation/, async () => {
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
      path: '/chatbot-conversations/',
      response: chatbot.conversationsSummary,
    })
  })
})
