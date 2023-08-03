import React from "react";
import createField, { Textarea } from './../../common/FormsControl/FormControl'
import { Input } from "./../../common/FormsControl/FormControl";
import { reduxForm } from "redux-form";
import object from './ProfileInfo.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
      </div>
        <div>
          <b>My professional skills</b>:{createField("My professional skills", "lookingForAJobDecsription", [], Textarea)}
        </div>
      <div>
        <b>About me</b>: {profile.aboutMe}
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map(function (key) {
          return (
            <div className={object.contact}>
                <b>{key} : {createField("Full name", "contact" + key, [], Input)}</b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataForm;
