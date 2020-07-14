import {usersAPI} from "../components/API/api";
import {helpBooleenFollow} from "../Utils/objectFollowHelp";
import {PhotosType} from "./profile-reduce";


const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_USERS_COUNT = "users/SET_USERS_COUNT";
const TOGGLE_IS_FEATHING = "users/TOGGLE_IS_FEATHING";
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING_IN_PROGRESS";

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
type InitialType = {
    users: Array <UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFeaching: boolean
    followingInProgress: any[] | boolean
}
let initialState:InitialType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 2,
    isFeaching: true,
    followingInProgress: false,
};

const usersReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: helpBooleenFollow(state.users, action.userId, "id", {
                    followed: true,
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: helpBooleenFollow(state.users, action.userId, "id", {
                    followed: false,
                }),
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            };
        }
        case TOGGLE_IS_FEATHING: {
            return {
                ...state,
                isFeaching: action.isFeaching,
            };
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress,
            };
        }

        default:
            return state;
    }
};
type ActionType = FollowAC|UnFollowAC|SetCountType|SetTotalCountType|SetUsersType|ToggleIsFeachingType
    |IsFeachingType;
export const followAccept = (userId:number):FollowAC => ({type: FOLLOW, userId});
type FollowAC = {
  type: typeof FOLLOW,
  userId: number
}
export const unfollowAccept = (userId:number):UnFollowAC => ({type: UNFOLLOW, userId});
type UnFollowAC = {
    type: typeof UNFOLLOW,
    userId: number
}
export const setUsers = (users:UserType):SetUsersType => ({type: SET_USERS, users});
type SetUsersType = {
    type: typeof SET_USERS,
    users: UserType
}
export const setCountPage = (currentPage:number):SetCountType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
type SetCountType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setTotalCount = (totalUsersCount:number):SetTotalCountType => ({
    type: SET_USERS_COUNT,
    count: totalUsersCount,
});
type SetTotalCountType = {
    type: typeof SET_USERS_COUNT,
    count:number
}
export const toggleIsFeaching = (isFeaching:boolean):ToggleIsFeachingType => ({
    type: TOGGLE_IS_FEATHING,
    isFeaching,
});
type ToggleIsFeachingType = {
    type: typeof TOGGLE_IS_FEATHING,
    isFeaching:boolean
}
export const isFollowing = (followingInProgress:any[]|boolean, userId:number):IsFeachingType => ({
    type: FOLLOWING_IN_PROGRESS,
    followingInProgress: followingInProgress, userId

});
type IsFeachingType = {
    type: typeof FOLLOWING_IN_PROGRESS,
    followingInProgress:any[]|boolean,
    userId:number
}

//      -----------THUNK---------------
export const getUsersThunk = (currentPage:number, pageSize:number) => {
    return async (dispatch:Function) => {
        dispatch(toggleIsFeaching(true)); //загрузка preloader
        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFeaching(false)); //загрузка preloader
        dispatch(setUsers(data.items)); //получить пользователей
        dispatch(setTotalCount(data.totalCount));
        dispatch(setCountPage(currentPage)); //текущая страница
    };
};

export const followUnfollow = async (
    dispatch:any,
    userId:any,
    apiMethod:any,
    actionMethod:any
) => {
    dispatch(isFollowing(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionMethod(userId));
    }
    dispatch(isFollowing(false, userId));
};
export const follow = (userId:number) => {
    return async (dispatch:Function) => {
        let apiMethod = usersAPI.followAPI.bind(usersAPI);
        let actionMethod = followAccept;
        followUnfollow(dispatch, userId, apiMethod, actionMethod);
    };
};
export const unfollow = (userId:number) => {
    return async (dispatch:Function) => {
        let apiMethod = usersAPI.unFollowAPI.bind(usersAPI);
        let actionMethod = unfollowAccept;
        followUnfollow(dispatch, userId, apiMethod, actionMethod);
    };
};
export default usersReducer;
