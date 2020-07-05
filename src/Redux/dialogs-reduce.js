import {usersAPI} from "../components/API/api";
import {setTotalCount, setUsers, toggleIsFeaching} from "./users-reducer";

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    // let copyState;
    // copyState.dialogsMessages = { ...state.dialogsMessages };
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessagesText;
            return {
                ...state,
                dialogsMessages: [...state.dialogsMessages, { id: 6, message: body }]
            };
        // copyState.newMessagesText = '';
        default:
            return state;
    }
}
export let addSendMessageCreator = (newMessagesText) => ({
    type: SEND_MESSAGE, newMessagesText
})



export default dialogsReducer;