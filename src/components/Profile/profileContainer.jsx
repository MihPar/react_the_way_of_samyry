import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/profile_reducer";
import { useParams } from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.props.params.userId;
    if (!userId) {
      return (userId = 2);
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.Profile,
  });

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer )