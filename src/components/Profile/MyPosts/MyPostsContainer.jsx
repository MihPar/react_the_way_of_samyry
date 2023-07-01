import React from "react";
import {
  addPostActionCreator,
  updataNewPostTextActionCreator,
} from "../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContenxt";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updataNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updataNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
