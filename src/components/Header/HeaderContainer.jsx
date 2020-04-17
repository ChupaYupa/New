import React from 'react';
import { connect } from 'react-redux';
import Header from "./Header";
import { getAuthUser} from '../../Redux/auth-reducer';



class HeaderContainer  extends React.Component {
    componentDidMount() {
      this.props.getAuthUser()
    }


    render() {

        return (<Header {...this.props} />);
    }

}

const mapStateToProps = (state) => ({
    login: state.authPage.login,
    isAuth: state.authPage.isAuth
})

export default
    connect (mapStateToProps, {getAuthUser})(HeaderContainer);

