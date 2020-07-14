import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCountPage,
  isFollowing,
  getUsersThunk,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preoader from "../common/Preoader/Preoader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFeaching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(currentPage) {
    debugger;
    this.props.getUsersThunk(currentPage, this.props.pageSize);
  }
  render(props) {
    return (
      <>
        {this.props.isFeaching ? (
          <Preoader />
        ) : (
          <Users
            totalItemsCount={this.props.totalItemsCount}
            setCountPage={this.props.setCountPage}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged.bind(this)}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
            isFollowing={this.props.isFollowing}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  console.log("mapStateToProps");
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFeaching: getIsFeaching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  //HOC
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCountPage,
    isFollowing,
    getUsersThunk,
  })
)(UsersContainer);
