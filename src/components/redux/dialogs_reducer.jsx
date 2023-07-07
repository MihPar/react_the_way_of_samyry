const UPDATA_NEW_MESSAGE_BODY = "UPDATA_NEW_MESSAGE_BODY";
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
      newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
//   let stateCopy
  switch (action.type) {
    case UPDATA_NEW_MESSAGE_BODY:
        return {
            ...state,
            newMessageBody: action.body
        }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: "",
            messagesData: [...state.messagesData, { id: 6, message: body }] 
        }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updataNewMessageBodyCreator = (body) => 
({type: UPDATA_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
