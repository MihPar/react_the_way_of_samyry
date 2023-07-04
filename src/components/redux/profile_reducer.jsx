const ADD_POST = "ADD_POST";
const UPDATA_NEW_POST_TEXT = "UPDATA-NEW-POST-TEXT";

let initialState = {
        postData: [
          { id: 1, message: "Hey, how are your?", likesCount: "34" },
          { id: 2, message: "It is my first posts", likesCount: "56" },
          { id: 2, message: "lalalal", likesCount: "12" },
          { id: 2, message: "wowoowwowowo", likesCount: "21" },
        ],
        newPostText: "it-incubator",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      let stateCopy = {...state}
      stateCopy.postData = [...state.postData]
      stateCopy.postData.push(newPost)
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATA_NEW_POST_TEXT: {
        let stateCopy = {...state}
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state
  }
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updataNewPostTextActionCreator = (text) => 
({type: UPDATA_NEW_POST_TEXT, newText: text})

export default profileReducer;
