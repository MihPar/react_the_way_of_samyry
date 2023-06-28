import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
 
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
    sidebar: {}
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

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
};

export default store;
window.store = store;
