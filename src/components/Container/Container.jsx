import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../Redux/State';

const Container = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} 
            newPostText={props.profilePage.newPostText} 
            dispatch={props.dispatch} />
        </div>);
}
export default Container;