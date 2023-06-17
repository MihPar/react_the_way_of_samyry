import object from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div className={object.descriptionBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={object.mePosts}>
        <Post message="Hey, how are your?" likesCount="34" />
        <Post message="It is my first posts" likesCount="56" />
        <Post countLike="15" />
      </div>
    </div>
  );
};

export default MyPosts;
