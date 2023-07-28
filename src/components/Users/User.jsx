import styles from "./Users.module.css";
import usersPhoto from "./../.././../src/assets/image/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({ user, followingInProgress, unfollw, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile"}>
            <img
              src={user.photos.small !== null ? user.photos.small : usersPhoto}
              className={styles.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollw(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
