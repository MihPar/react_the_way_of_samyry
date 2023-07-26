import { usersAPI } from "../../api/api";
import { profileAPI  } from "../../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS "
const DELETE_POST = "DELETE_POST"

let initialState = {
  postData: [
    { id: 1, message: "Hey, how are your?", likesCount: "34" },
    { id: 2, message: "It is my first posts", likesCount: "56" },
    { id: 2, message: "lalalal", likesCount: "12" },
    { id: 2, message: "wowoowwowowo", likesCount: "21" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
        return {
          ...state,
          profile: action.profile,
        };
      }
      case SET_STATUS: {
        return {
          ...state,
          status: action.status,
        };
      }
      case DELETE_POST: {
        return {
          ...state,
          posts: state.posts.filter(p => p.id !== action.postId),
        };
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText)  => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
      });
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}
export const updataStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updataStatus(status)
        dispatch(setStatus(status));
}

export default profileReducer;
