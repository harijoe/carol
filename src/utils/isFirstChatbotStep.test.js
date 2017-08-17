import isFirstChatbotStep from './isFirstChatbotStep'

const firstQuestion = {}

const key1 = { message: { is_first_step: true, attachment: { type: 'template', payload: { template_type: 'generic' } } } }

const key2 = { message: { text: "C'est parti ! Quel est votre projet ?", quick_replies: [] } }

const keySummary = { message: { attachment: { type: 'template', payload: { template_type: 'generic.summary' } } } }

describe('isConversationOnKey1', () => {
  it('returns true on key 1', () => {
    const activeConversation = [firstQuestion, key1]

    expect(isFirstChatbotStep(activeConversation)).toEqual(true)
  })

  it('returns false on simple question', () => {
    const activeConversation = [firstQuestion, key1, key2]

    expect(isFirstChatbotStep(activeConversation)).toEqual(false)
  })

  it('returns false on chat summary', () => {
    const activeConversation = [firstQuestion, key1, key2, keySummary]

    expect(isFirstChatbotStep(activeConversation)).toEqual(false)
  })
})
