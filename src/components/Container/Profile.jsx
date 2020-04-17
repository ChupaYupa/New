import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../Redux/Store';
import MyPostsContainer from './My posts/MyPostContainer';
import Preoader from "../common/Preoader/Preoader";

const Profile = (props) => {
if(!props.profile) {
    return <Preoader/>
}

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>);
}
export default Profile;