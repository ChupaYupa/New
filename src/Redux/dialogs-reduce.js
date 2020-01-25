const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessagesText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessagesText;
            state.newMessagesText = '';
            state.dialogsMessages.push({ id: 6, message: body });
            

            return state;
        default:
            return state;
    }
}
export let addSendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export let updateNewMessageBodyreator = (body) => ({
 type: UPDATE_NEW_MESSAGE, body: body
})


export default dialogsReducer;