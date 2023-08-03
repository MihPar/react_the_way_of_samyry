import { usersAPI } from "../../api/api";
import { profileAPI  } from "../../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS "
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

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
      case SAVE_PHOTO_SUCCESS: {
        return {
          ...state,
          profile: {...state.profile, photos: action.photos},
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
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
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
    if(response.data.resultCode === 0) {
        dispatch(setStatus(state))
       }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
       if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
       }
} 
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
       if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
       }
} 

export default profileReducer;
