import React from 'react';
import s from './Profile.module.css';
import ProfileHockStatus from './ProfileHockStatus.js'
import userPhoto from './../../../images/1aa63493e17019ffb918b635151f9ba1--dearly-beloved-icons.jpg';


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.tutol}>

            </div>
            <div className={s.discriptionblock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
               <ProfileHockStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>);
}
export default ProfileInfo;