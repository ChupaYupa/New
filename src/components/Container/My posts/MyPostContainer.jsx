import React from 'react';
import { addPostActionCreator } from '../../../Redux/profile-reduce';
import MyPosts from './MyPosts';
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
        addPost: (newMessagesBody) => {
            dispatch(addPostActionCreator(newMessagesBody));
        },
    }
}
const MyPostsContainer = connect(mapStateToPost, mapDispathToPost)(MyPosts);
export default MyPostsContainer;