import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
};
export const getIsFeaching = (state) => {
    return state.usersPage.isFeaching
};
export const getUsers = createSelector(getUsersSelector,getIsFeaching, (users, isFeaching)=> {
   return users.filter(u=>true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}