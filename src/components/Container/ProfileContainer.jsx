import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getProfile} from "../../Redux/profile-reduce";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthComponent";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class  ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);

    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

export default compose(
    connect(mapStateToProps, {getProfile}),
withRouter)(ProfileContainer);
