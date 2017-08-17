export default activeConversation => {
  if (activeConversation.length < 1) {
    return false
  }

  const lastMessage = activeConversation[activeConversation.length - 1].message

  return lastMessage.is_first_step || false
}
