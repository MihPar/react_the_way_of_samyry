import Header from "./Header";
import { connect } from "react-redux";
import React from "react";
import { logOut } from "../redux/auth_reducer";

class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { logOut })(HeaderContainer);
