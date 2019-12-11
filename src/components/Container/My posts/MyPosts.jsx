import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map (p =>  <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();
//добавление поста
    let addPost = () => {
        //let text = newPostElement.current.value;
        props.dispatch({type: 'ADD-POST'});
    }
//обновление поста
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;