import object from "./MyPosts.module.css";
import Post from "./Posts/Post";

const postData = [
    {id: 1, message: 'Hey, how are your?', likesCount: "34"},
    {id: 2, message: 'It is my first posts', likesCount: "56"},
    {id: 2, message: 'lalalal', likesCount: "12"},
    {id: 2, message: 'wowoowwowowo', likesCount: "21"},
]

let postsElement = postData.map(function(post) {
    return <Post message={post.message} likesCount={post.likesCount} />
})

const MyPosts = (props) => {
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
