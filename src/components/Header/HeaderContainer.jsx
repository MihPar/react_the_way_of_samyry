import React from "react"
import Header from "./Header"
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../redux/auth_reducer";

class HeaderContainer extends Reat.Component {
    componentDidMount() {
        axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me `, {
            withCredentials: true
        }
      )
      .then((response) => {
        if(response.data.resultCode === 0) {
            let {Id, email, login} = response.data.data
            this.props.setAuthUserData(Id, email, login)
        }
      });
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = () => {
    isAuth: state.auth.isAuth 
    login: state.auth.login 
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)