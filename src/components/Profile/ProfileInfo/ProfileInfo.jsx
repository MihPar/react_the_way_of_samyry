import Preloader from "../../common/preloader/preloader"
import object from "./ProfileInfo.module.css"
import React from 'react'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import usersPhoto from "./../.././../src/assets/image/user.png"; 

const ProfileInfo = ({profile, status, updataStatus, isOwner}) => {
    if(!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={object.descriptionBlock}>
                <imp src={profile.photos.large || usersPhoto } className={object.mainPhoto} />
                {isOwner && <input type="file" />}
                <ProfileStatusWithHooks  status={status} updataStatus={updataStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo