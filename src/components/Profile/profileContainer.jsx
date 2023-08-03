import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/profile_reducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getStatus } from "../redux/profile_reducer";
import { updataStatus } from "../redux/profile_reducer";
import { savePhoto } from "../redux/profile_reducer";
import saveProfile from './../redux/profile_reducer'

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.porps.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdata(prevProps, pervState, snapshop) {
    if(this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile()
    }
  }

  render() {
    return (
      <div>
        <Profile
          isOwner= {!this.props.match.params.userId}
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updataStatus={this.props.updataStatus}
          savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.Profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updataStatus, savePhoto, saveProfile }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer )