import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/profile_reducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getStatus } from "../redux/profile_reducer";
import { updataStatus } from "../redux/profile_reducer";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      return (userId = 2);
    }
    this.props.getUserProfile(userId)
        this.props.getStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status }
        updataStatus={this.props.updataStatus} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.Profile,
    status: state.profilePage.status, 
  });

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updataStatus }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer )