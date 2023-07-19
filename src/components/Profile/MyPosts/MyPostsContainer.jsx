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
        addPost: (newPostText) => {
            store.dispatch(addPostActionCreator(newPostText));

        }
    }
}


const MyPropsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPropsContainer;
