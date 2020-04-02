import {usersAPI} from "../components/API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FEATHING = 'TOGGLE_IS_FEATHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 2,
    isFeaching: true,
    followingInProgress: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FEATHING: {
            return {
                ...state,
                isFeaching: action.isFeaching
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
            }
        }

        default:
            return state;
    }

}
export const followAccept = (userId) => ({ type: FOLLOW, userId });
export const unfollowAccept = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCountPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalUsersCount) => ({ type: SET_USERS_COUNT, count: totalUsersCount });
export const toggleIsFeaching = (isFeaching) => ({ type: TOGGLE_IS_FEATHING, isFeaching });
export const isFollowing = (followingInProgress) => ({ type: FOLLOWING_IN_PROGRESS, followingInProgress: followingInProgress });

export const getUsersThunk =(currentPage, pageSize)=>{
    return (dispatch) => {
        dispatch (toggleIsFeaching(true)) //загрузка preloader
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            debugger
            dispatch(toggleIsFeaching(false)); //загрузка preloader
            dispatch(setUsers(data.items)); //получить пользователей
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

export const follow =(userId)=>{
    return (dispatch) => {
        dispatch (isFollowing(true, userId));
        usersAPI.followAPI(userId)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(followAccept(userId));
                }
                dispatch(isFollowing(false, userId))
            });
    }
}
export const unfollow =(userId)=>{
    return (dispatch) => {
        dispatch (isFollowing(true, userId));
        usersAPI.unFollowAPI(userId)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(unfollowAccept(userId));
                }
                dispatch(isFollowing(false, userId))
            });
    }
}
export default usersReducer;