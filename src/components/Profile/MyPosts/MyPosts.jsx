import { reduxForm } from "redux-form";
import object from "./MyPosts.module.css";
import Post from "./Posts/Post";
import React from "react";
import Field from "redux-form";
import { required } from "../../../utils/validators/validators";
import { maxLenghtCreater } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/Formscontrol";

const maxLength10 = maxLenghtCreater(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post message"}
          validate={[required, minLength2]}
        />
      </div>
      <button>Add post</button>
    </form>
  );
};

AddNewPostForm = reduxForm({ form: "AddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //     return nextProps !== this.props || nextState !== this.state
  // }

  let postsElement = [...props.posts].reverse().map(function (post) {
    return <Post key={post.id} message={post.message} likesCount={post.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={object.descriptionBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={object.mePosts}>{postsElement}</div>
    </div>
  );
});

export default MyPosts;
