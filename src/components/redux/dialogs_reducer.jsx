const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Not bad" },
        { id: 4, message: "I am fun" },
        { id: 5, message: "It is cool" },
      ],
      dialogsData: [
        { id: 1, name: "Mickhael" },
        { id: 2, name: "Tatiana" },
        { id: 3, name: "Alexandr" },
        { id: 4, name: "Maria" },
        { id: 5, name: "Ilia" },
      ],
}

const dialogsReducer = (state = initialState, action) => {
//   let stateCopy
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
        return {
            ...state,
            messagesData: [...state.messagesData, { id: 6, message: body }] 
        }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;
