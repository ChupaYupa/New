import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../Redux/State';

const Container = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost = {props.addPost} />
        </div>);
}
export default Container;