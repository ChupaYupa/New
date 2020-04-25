import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getProfile, getStatus, updateStatus} from "../../Redux/profile-reduce";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthComponent";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class  ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorezedId;
            if(!userId) {
                this.props.history.push("/login")}
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}


let mapStateToProps = (state) => {
    debugger
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        authorezedId: state.authPage.id,
        isAuth:state.authPage.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
withRouter)(ProfileContainer);
