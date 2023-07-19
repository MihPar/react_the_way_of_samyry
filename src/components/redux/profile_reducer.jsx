import { usersAPI } from "../../api/api";
import { profileAPI  } from "../../api/api";

const ADD_POST = "ADD_POST";
const UPDATA_NEW_POST_TEXT = "UPDATA-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS "

let initialState = {
  postData: [
    { id: 1, message: "Hey, how are your?", likesCount: "34" },
    { id: 2, message: "It is my first posts", likesCount: "56" },
    { id: 2, message: "lalalal", likesCount: "12" },
    { id: 2, message: "wowoowwowowo", likesCount: "21" },
  ],
  newPostText: "it-incubator",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }
    case UPDATA_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
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
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
      });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
      });
}
export const updataStatus = (status) => (dispatch) => {
    profileAPI.updataStatus(status).then((response) => {
        dispatch(setStatus(status));
      });
}

export const updataNewPostTextActionCreator = (text) => ({
  type: UPDATA_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
