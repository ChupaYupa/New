const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
        //     follow: true, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Minsk', country: 'Belarus' }
        // },
        // {
        //     id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
        //     follow: false, fullName: 'Misha', status: 'I am cool', location: { city: 'Moscow', country: 'Russia' }
        // },
        // {
        //     id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
        //     follow: true, fullName: 'Sasha', status: 'I am good', location: { city: 'Kiev', country: 'Ukraine' }
        // },
    ],
}

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }

}
export const followedAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowedAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;