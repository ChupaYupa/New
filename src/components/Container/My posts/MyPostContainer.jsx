import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../Redux/profile-reduce';
import MyPosts from './MyPosts';
import StoreContext from './../../../StoreContext';
import { connect } from 'react-redux';
// let addPostActionCreator = () => {
//     return {type: 'ADD-POST'}
// }
// let updateNewPostTextActionCreator = (text) => {
//     return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
// }
let mapStateToPost = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispathToPost = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToPost, mapDispathToPost)(MyPosts);
export default MyPostsContainer;