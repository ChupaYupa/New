import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
// const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "It's my first post", like: 20 },
                { id: 2, message: 'Hello, how are you?', like: 40 }
            ],
            newPostText: 'chupayupa.com'
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Sveta" },
                { id: 3, name: "Sasha" },
                { id: 4, name: "Valera" },
                { id: 5, name: "Artem" }
            ],
            dialogsMessages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Goodbye" },
                { id: 4, message: "yo" },
                { id: 5, message: "yo" }
            ],
            newMessagesText: 'chupa'
        }
    },
    getState() {
        return this._state
    },
    _callsubsriber() {
        console.log('state changed');
    },
    //добавление нового поста на стену
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         like: 0
    //     };

    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';

    //     this._callsubsriber(this._state);
    // },
    // updateNewPostText(newText) {

    //     this._state.profilePage.newPostText = newText;
    //     this._callsubsriber(this._state);
    // },
    subscribe(observer) {
        this._callsubsriber = observer;  //патерн, наблюдатель
    },



    //метод dispatch

    dispatch(action) {  //{type: 'add-post'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        // if (action.type === ADD_POST) {            //Добавление постов
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         like: 0
        //     };

        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callsubsriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) { //type: 'UPDATE-NEW-POST-TEXT'
        //     this._state.profilePage.newPostText = action.newText; //добавляем newText в action
        //     this._callsubsriber(this._state);


        // } else if (action.type === UPDATE_NEW_MESSAGE) {                               //Добавление сообщений
        //     this._state.messagesPage.newMessagesText = action.body;
        //     this._callsubsriber(this._state);
        // }
        // else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.messagesPage.newMessagesText;
        //     this._state.messagesPage.dialogsMessages.push( { id: 6, message: body });
        //     this._state.messagesPage.newMessagesText = '';
            
            
            
            this._callsubsriber(this._state);
        }
    }

// export let addPostActionCreator = () => ({
//         type: ADD_POST
// })
// export let updateNewPostTextActionCreator = (text) => ({
//      type: UPDATE_NEW_POST_TEXT, newText: text
// })
// export let addSendMessageCreator = () => ({
//     type: SEND_MESSAGE
// })
// export let updateNewMessageBodyreator = (body) => ({
//  type: UPDATE_NEW_MESSAGE, body: body
// })


window.store = store;


export default store;