import React from "react";
import Profile from "./profile"
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../redux/profile_reducer";
import { useParams } from 'react-router-dom';
import { usersAPI } from "../../api/api";

export function withRouter(Children){
     return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.props.params.userId
        if(!userId) {
            return userId = 2
        }
        usersAPI.getProfile(userId)
        axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/` + userId
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
    }

  render() {
    return (
      <div>
        <Profile {...this.props} profile = { this.props.profile } />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.Profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
