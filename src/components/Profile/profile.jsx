import MyPosts from "./MyPosts/MyPosts";
import object from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import React from "react"

const Profile = (props) => {
    
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
