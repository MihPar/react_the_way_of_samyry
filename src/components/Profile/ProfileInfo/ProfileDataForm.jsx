import React from "react";

const ProfileDataForm = () => {
  return (
    <form>
      <div>
        <button onClick={goToEditMode}>save</button>
      </div>
      <div>
        <b>Full name</b>: {createField}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills </b>: {profile.lookingForAJobDecsription}
        </div>
      )}
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
    </form>
  );
};

export default ProfileDataForm;
