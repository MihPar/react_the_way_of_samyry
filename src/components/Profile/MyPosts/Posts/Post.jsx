import object from "./Post.module.css";

const Post = () => {
  return (
    <div className={object.item}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png"
        height="50px"
        width="50px"
      />
      post1
      <div className={object.like}>
        <span>like</span>
        <br />
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
