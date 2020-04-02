import React from 'react';
import s from './Profile.module.css';
import ProfileStatus from './ProfileStatus.js'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.tutol}>
                <img src="http://blog.getgoodrank.ru/wp-content/uploads/2015/08/123.jpg" />
            </div>
            <div className={s.discriptionblock}>
                <img src={props.profile.photos.large}/>
               <ProfileStatus status={"Hello my friends"}/>
            </div>
        </div>);
}
export default ProfileInfo;