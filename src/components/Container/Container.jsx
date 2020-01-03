import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../Redux/Store';
import MyPostsContainer from './My posts/MyPostContainer';

const Container = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>);
}
export default Container;