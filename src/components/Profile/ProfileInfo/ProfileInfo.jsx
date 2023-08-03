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
    saveProfile(formData).then(
        () => {
            setEditMode(false)
        }
    )
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
    <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookignForAJob && 
      <div>
      <b>My professional skills</b>:{profile.lookignForAJobDiscription}
        </div>
      }
        
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map(function (key) {
          return (
            <Contact
              key={key}
              contactTitile={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
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
