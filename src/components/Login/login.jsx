import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validatore";
import { Input } from "../common/FormsControl/FormsControl";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} validate={[required]} name={'login'} placeholder={"Login"} />
        </div>
        <div>
            <Field component={Input} validate={[required]} name={'passwors'} placeholder={'Password'} />
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type="checkbox" /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>

}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit= {onSubmit}/>
    </div>
}

export default Login