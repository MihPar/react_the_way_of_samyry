import styles from "./Users.module.css";
import usersPhoto from "./../.././../src/assets/image/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(function (p) {
          return (
            <span
              className={props.currentPage === p && styles.selectPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(function (u) {
        return (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile"}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : usersPhoto}
                    className={styles.usersPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button disabled={props.followingInProgress}
                    onClick={() => {
                        props.toggleFollowingProgress(true)
                        axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                          {
                            withCredentials: true,
                            headers: {
                                // "API-KEY": "fsdfjsdfjds"
                            }
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowingProgress(false)
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button disabled={props.followingInProgress}
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                                // "API-KEY": "fsdfjsdfjds"
                            }
                         }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
