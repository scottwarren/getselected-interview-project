const initialMessagesState = {
  messages: [],
  selectedMessageId: null,
}

export default (state = initialMessagesState, action) => {
  switch (action.type) {
    case 'GENERATE_NEW_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload,
        ]
      }
    case 'GET_MESSAGES':
      return {
        ...state,
        messages: [
          ...action.payload
        ],
      }
    case 'SELECT_MESSAGE':
      // Find message by ID and mark as read
      return {
        ...state,
        selectedMessageId: action.payload.selectedMessageId
      }
    default:
      return state
  }
}