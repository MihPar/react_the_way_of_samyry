import { Field } from "formik";
import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormControl";
import { connect } from "react-redux";
import { login } from "../redux/auth_reducer";
import object from "./../../components/common/FormsControl/FormControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("EmaPasswordil", "password", [required], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "password"}, "remember me")}
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
    isAuth:  state.auth.isAuth
})

export default connect(mapStateToProps , { login })(Login);
