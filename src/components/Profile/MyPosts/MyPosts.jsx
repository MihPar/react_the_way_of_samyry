import { reduxForm } from "redux-form";
import object from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from "react";
import Field from "redux-form"
import { required } from "../../../utils/validators/validators";
import { maxLenghtCreater } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/Formscontrol";


const  MyPosts = (props) => {
  let postsElement = props.postData.map(function (post) {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText ) 
  };

  return (
    <div className={object.descriptionBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={object.mePosts}>{postsElement}</div>
    </div>
  );
};

const maxLength10 = maxLenghtCreater(10)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"}
         validate={[required, minLength2]} />
      </div>
      <button>Add post</button>
    </form>
  );
};

AddNewPostForm = reduxForm({form: "AddNewPostForm"})(AddNewPostForm)

export default MyPosts;
