import Preloader from "../../common/preloader/preloader"
import object from "./ProfileInfo.module.css"
import React from 'react'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({profile, status, updataStatus}) => {
    if(!prifile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={object.descriptionBlock}>
                <imp src={profile.photos.large } />
                <ProfileStatusWithHooks  status={status} updataStatus={updataStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo