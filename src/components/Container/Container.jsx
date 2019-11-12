import React from 'react';
import s from './Container.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Container = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>);
}
export default Container;