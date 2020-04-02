import {setTotalCount, setUsers, toggleIsFeaching} from "./users-reducer";
import {dialogAPI} from "../components/API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "It's my first post", like: 20 },
        { id: 2, message: 'Hello, how are you?', like: 40 }
    ],
    newPostText: 'chupayupa.com',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText //добавляем newText в action
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getProfile = (userId) => (dispatch) => {
    dialogAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data)); //получить профиль
    });
}

export default profileReducer;