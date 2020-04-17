import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"}component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>);
}

const ReduxLoginForm = reduxForm({
    form: 'Login'
})(LoginForm);



const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;