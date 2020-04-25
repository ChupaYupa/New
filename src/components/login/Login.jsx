import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validation/indexValid";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={requiredField} placeholder={"Email"} name={"email"} component={Input}/>
            </div>
            <div>
                <Field validate={requiredField} placeholder={"Password"} name={"password"} type={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"}component={Input}/> remember me
            </div>
            <div>
                { props.error &&
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
    if(props.isAuth) {
        return <Redirect to={"/profile"} />
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