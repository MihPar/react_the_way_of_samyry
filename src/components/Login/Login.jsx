import { Field } from "formik";
import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormControl";
import { connect } from "react-redux";
import { login } from "../redux/auth_reducer";
import object from "./../../components/common/FormsControl/FormControl.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("EmaPasswordil", "password", [required], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "password"}, "remember me")}
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField("symbols from image ", "captcha", [required], Input, {})}
      {
      error && <div className={object.form_sumyray_error}>{error}</div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth:  state.auth.isAuth
})

export default connect(mapStateToProps , { login })(Login);
