import Preloader from "../../common/preloader/preloader";
import object from "./ProfileInfo.module.css";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "./../.././../src/assets/image/user.png";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = ({ profile, status, updataStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEdibMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData)
    setEditMode(false)
};

  return (
    <div>
      <div className={object.descriptionBlock}>
        <imp
          src={profile.photos.large || usersPhoto}
          className={object.mainPhoto}
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

        {editMode ? (
          <ProfileDataForm profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEdibMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}

        <ProfileStatusWithHooks status={status} updataStatus={updataStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <ProfileDataForm />
  );
};


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={object.contact}>
      <b>{contactTitle}:</b>
      <b>{contactValue}</b>
    </div>
  );
};

export default ProfileInfo;
