const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "It's my first post", like: 20 },
        { id: 2, message: 'Hello, how are you?', like: 40 }
    ],
    newPostText: 'chupayupa.com'
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText; //добавляем newText в action
            return state;
        default:
            return state;
    }

}
export let addPostActionCreator = () => ({
    type: ADD_POST
})
export let updateNewPostTextActionCreator = (text) => ({
 type: UPDATE_NEW_POST_TEXT, newText: text
})
export default profileReducer;