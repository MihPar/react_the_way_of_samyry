import MyPosts from "./MyPosts/MyPosts";
import object from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updataStatus={props.updataStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
