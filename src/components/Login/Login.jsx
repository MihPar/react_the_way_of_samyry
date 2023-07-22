import { Field } from "formik";
import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormControl";
import { connect } from "react-redux";
import { login } from "../redux/auth_reducer";
import object from "./../../components/common/FormsControl/FormControl.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        Remember me
      </div>
      {
      props.error && <div className={object.form_sumyray_error}>ERROR</div>
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
