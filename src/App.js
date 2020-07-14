import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Login from "./components/login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {getInitialize} from "./Redux/app-reduce";
import Preoader from "./components/common/Preoader/Preoader";
import store from "./Redux/redux-store";
import {withSuspense} from "./components/HOC/RouterSuspenseHoc";
import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Container/ProfileContainer'));


// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';


//callback передаем в App
class App extends React.Component {
    componentDidMount() {
        this.props.getInitialize()
    }

    render() {
        if (!this.props.initialIzed) {
            return <Preoader/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path='/' render={()=> <Redirect to={"/profile"}/>}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/messages' render={withSuspense(DialogsContainer)}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 not found</div>}/>
                    {/* <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} /> */}
                    </Switch>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialIzed: state.appPage.initialIzed
    }
}

let AppCompose = compose(
    withRouter, connect(mapStateToProps, {getInitialize}),
)(App);

const MainApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppCompose/>
        </Provider>
    </HashRouter>
}
export default MainApp;

