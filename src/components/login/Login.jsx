import React from 'react';
import { reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validation/indexValid";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css';
import {loginForms} from "../../Utils/objectFollowHelp";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {loginForms(requiredField, "Email", "email", Input)}
            {loginForms(requiredField, "Password", "password", Input, {type: "password"})}
            {loginForms(null, null, "rememberMe", Input, {type: "checkbox"})}
            <div>
                {props.error &&
                <div className={s.formSummeryError}>{props.error}</div>
                }
                <button>Login</button>
            </div>
        </form>);
}

const ReduxLoginForm = reduxForm({
    form: 'Login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else
        return (
            <div>
                <h1>login</h1>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
        )
}

const mapStateToProps = (state) => ({

    isAuth: state.authPage.isAuth
})
export default connect(mapStateToProps, {login})(Login);