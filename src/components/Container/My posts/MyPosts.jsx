import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthreator, requiredField,} from "../../../Utils/Validation/indexValid";
import {Textarea} from "../../common/FormsControls/FormsControls";


// let addPostActionCreator = () => {
//     return {type: 'ADD-POST'}
// }
// let updateNewPostTextActionCreator = (text) => {
//     return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
// }
const maxLength10 = maxLengthreator(10);

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            {/* eslint-disable-next-line no-undef */}
            <Field component={Textarea}
                   name="newMessagesBody"
                   validate={[requiredField, maxLength10 ]}
                   placeholder="your message"/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMyPostsReduxForm = reduxForm({form:"postAddMessageForm"})(AddPostForm);


const MyPosts =  React.memo( props => {
    console.log("RENDER")
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>);


    let addNewMessage = (e) => {
        props.addPost(e.newMessagesBody)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={s.item}>
                <AddMyPostsReduxForm onSubmit={addNewMessage}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;