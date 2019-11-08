import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hello, how are you?' like='15'/>
                <Post message="It's my first post" like='20'/>
            </div>
        </div>
    );
}
export default MyPosts;