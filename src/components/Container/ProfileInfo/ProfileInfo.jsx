import React from 'react';
import s from './Profile.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.tutol}>
                <img src="http://blog.getgoodrank.ru/wp-content/uploads/2015/08/123.jpg" />
            </div>
            <div className={s.discriptionblock}>
                <a>ava + discription</a>
            </div>
        </div>);
}
export default ProfileInfo;