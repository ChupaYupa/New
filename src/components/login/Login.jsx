import React from 'react';
import {Form, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validation/indexValid";
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css';
import {loginForms} from "../../Utils/objectFollowHelp";

const LoginForm = (props) => {
    debugger
    return (
        <Form onSubmit={props.handleSubmit}>
            {loginForms(requiredField, "Email", "email", Input)}
            {loginForms(requiredField, "Password", "password", Input, {type: "password"})}
            {loginForms(null, null, "rememberMe", Input, {type: "checkbox"})}

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && loginForms(requiredField, "SymbolsFromImage", "captchaUrl", Input, {})}
            <div>
                {props.error &&
                <div className={s.formSummeryError}>{props.error}</div>
                }
                <button>Login</button>
            </div>
        </Form>);
}

const ReduxLoginForm = reduxForm({
    form: 'Login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else
        return (
            <div>
                <h1>login</h1>
                <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        )
}

const mapStateToProps = (state) => ({

    isAuth: state.authPage.isAuth,
    captchaUrl: state.authPage.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);