import React from 'react';
import s from './Users.module.css';
import { connect } from 'react-redux';
import { followedAC, unfollowedAC, setUsersAC } from '../../Redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispathToProps = (dispath) => {
    return {
        follow: (userId) => {
            dispath(followedAC(userId))
        },
        unfollow: (userId) => {
            dispath(unfollowedAC(userId));
        },
        setUsers: (users) => {
            dispath(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Users);