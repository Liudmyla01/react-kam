import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validatore";
import { Input } from "../common/FormsControl/FormsControl";
import { login } from "../../redux/auth-reducer";
import { Redirect} from 'react-router';
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} validate={[required]} name={'email'} placeholder={"Login"} />
        </div>
        <div>
            <Field component={Input} validate={[required]} type='password' name={'passwors'} placeholder={'Password'} />
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
       props.login(formData.email, formData.passwors, formData.rememberMe)
    }
if(props.isAuth){
    return <Redirect to={'/profile'}/>
}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit= {onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)