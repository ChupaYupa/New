import React from 'react';
import { connect } from 'react-redux';
import Header from "./Header";
import { getAuthUser, logout} from '../../Redux/auth-reducer';



class HeaderContainer  extends React.Component {

    render() {
        return (<Header {...this.props} />);
    }
}

const mapStateToProps = (state) => ({
    login: state.authPage.login,
    isAuth: state.authPage.isAuth,
})

export default
    connect (mapStateToProps, {getAuthUser, logout})(HeaderContainer);

