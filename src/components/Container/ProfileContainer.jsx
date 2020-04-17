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
            userId = 5763;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
withRouter)(ProfileContainer);
