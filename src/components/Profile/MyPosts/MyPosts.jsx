import object from "./MyPosts.module.css";
import Post from "./Posts/Post";



const MyPosts = (props) => {
    let postsElement = props.postData.map(function(post) {
        return <Post message={post.message} likesCount={post.likesCount} />
    })
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
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
