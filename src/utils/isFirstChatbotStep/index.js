export default activeConversation => {
  if (activeConversation.length === 0) {
    return true
  }

  const lastMessage = activeConversation[activeConversation.length - 1].message

  return lastMessage.is_first_step || false
}
