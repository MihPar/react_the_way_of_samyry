import { updataNewPostText } from "../../redux/store";
import object from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from "react";
import {addPostActionCreator, updataNewPostTextActionCreator} from './../../redux/profile_reducer'


const  MyPosts = (props) => {
  let postsElement = props.postData.map(function (post) {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = {type: 'UPDATA-NEW-POST-TEXT', newText: text}
    let action = updataNewPostTextActionCreator(text)
    props.dispatch(action);
  };

  return (
    <div className={object.descriptionBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={object.mePosts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
