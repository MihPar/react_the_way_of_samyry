import React from "react";
import Profile from "./profile"

class ProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

export default ProfileContainer;
