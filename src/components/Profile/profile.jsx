import MyPosts from "./MyPosts/MyPosts";
import object from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import React from "react"

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
