import object from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from "react";


const  MyPosts = (props) => {
  let postsElement = props.postData.map(function (post) {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost() 
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updataNewPostText(text)
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
        <button onClick={onAddPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={object.mePosts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
