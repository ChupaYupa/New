import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../Redux/Store';
import MyPostsContainer from './My posts/MyPostContainer';
import Preoader from "../common/Preoader/Preoader";

const Profile = (props) => {
    debugger
if(!props.profile) {
    return <Preoader/>
}

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>);
}
export default Profile;