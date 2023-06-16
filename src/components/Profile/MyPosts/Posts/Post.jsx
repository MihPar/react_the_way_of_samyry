import object from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={object.item}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png"
        height="50px"
        width="50px"
      />
      {props.message}
      
      <div className={object.like}>
        <span>like </span> {props.likesCount}
        <br />
      </div> 
    </div>
  );
};

export default Post;
