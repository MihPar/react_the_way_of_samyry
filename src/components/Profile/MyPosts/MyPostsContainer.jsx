import React from "react";
import {
  addPostActionCreator,
  updataNewPostTextActionCreator,
} from "../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"
import store from "./../../redux/redux_store"

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updataNewPostText: (text) => {
            let action = updataNewPostTextActionCreator(text);
            store.dispatch(action)
        },
        addPost: () => {
            store.dispatch(addPostActionCreator());

        }
    }
}


const MyPropsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPropsContainer;
