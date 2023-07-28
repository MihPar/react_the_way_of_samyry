import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
} from "../redux/users_reducer";
import { setCurrentPage } from "../redux/users_reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/preloader";
import { getUsers } from "../redux/users_reducer";
import { compose } from "redux";
import { getPageSize, getUsersSuper } from "../redux/users_selectors";
import { getTotalUsersCount } from "../redux/users_selectors";
import { getCurrentPage } from "../redux/users_selectors";
import { getIsFetching } from "../redux/users_selectors";
import { getFollowingInProgress } from "../redux/users_selectors";
import { getUsers } from "../redux/users_selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const  {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const  {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
    };
  };

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,})
)(UsersContainer)