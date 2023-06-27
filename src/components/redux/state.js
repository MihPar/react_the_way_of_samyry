const ADD_POST = "ADD_POST"
const UPDATA_NEW_POST_TEXT =  'UPDATA-NEW-POST-TEXT'
const UPDATA_NEW_MESSAGE_BODY = "UPDATA_NEW_MESSAGE_BODY" 
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hey, how are your?", likesCount: "34" },
        { id: 2, message: "It is my first posts", likesCount: "56" },
        { id: 2, message: "lalalal", likesCount: "12" },
        { id: 2, message: "wowoowwowowo", likesCount: "21" },
      ],
      newPostText: "it-incubator",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this.callSubscriber(this._state);
    } else if (action.type === UPDATA_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this.callSubscriber(this._state);
    } else if(action.type === UPDATA_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageBody = action.body
        this.callSubscriber(this._state)
    } else if(action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageBody
        this._state.dialogsPage.newMessageBody = ""
        this._state.dialogsPage.messagesData.push({ id: 6, message: body })
        this._callSubscriber(this._state)
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updataNewPostTextActionCreator = (text) => 
({type: UPDATA_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updataNewMessageBodyCreator = (body) => 
({type: UPDATA_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;
