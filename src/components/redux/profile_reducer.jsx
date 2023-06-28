const ADD_POST = "ADD_POST";
const UPDATA_NEW_POST_TEXT = "UPDATA-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATA_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
        return state
  }
};
export default profileReducer;
