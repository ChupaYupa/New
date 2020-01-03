import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// let addPostActionCreator = () => {
//     return {type: 'ADD-POST'}
// }
// let updateNewPostTextActionCreator = (text) => {
//     return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
// }
const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} />);

    let newPostElement = React.createRef();
    //добавление поста
    let onAddPost = () => {                 //callback
        props.addPost();
        // let text = newPostElement.current.value;
        // props.dispatch(addPostActionCreator());
    }
    //обновление поста
    let onPostChange = () => {                   //callback
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;