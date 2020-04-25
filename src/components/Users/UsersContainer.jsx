import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCountPage,  isFollowing, getUsersThunk } from '../../Redux/users-reducer';
import Users from './Users';
import Preoader from "../common/Preoader/Preoader";
import {withAuthRedirect} from "../HOC/withAuthComponent";
import {compose} from "redux";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(currentPage) {
        this.props.getUsersThunk(currentPage, this.props.pageSize);

    }
    render(props) {
        return <>
            {this.props.isFeaching ? <Preoader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged.bind(this)}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}
                       isFollowing={this.props.isFollowing}
                />
            }
          </>

    }
}








let mapStateToProps = (state) => {
    debugger
    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeaching: state.usersPage.isFeaching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// let widthHocUserComponent = withAuthRedirect(UsersContainer)

export default compose(                           //HOC
    connect (mapStateToProps, {follow, unfollow, setCountPage, isFollowing, getUsersThunk}),
    )(UsersContainer);
