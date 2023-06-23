import { rerenderEntireTree } from "../../render"

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hey, how are your?', likesCount: "34"},
            {id: 2, message: 'It is my first posts', likesCount: "56"},
            {id: 2, message: 'lalalal', likesCount: "12"},
            {id: 2, message: 'wowoowwowowo', likesCount: "21"},
        ],
        newPostText: "it-incubator"
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
    },
  }

  window.state = state

  export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
  }

  export let updataNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
  }

  export default state