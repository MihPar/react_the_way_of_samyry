import { authAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }         
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, payload: {userId, email, login} });
export const getAuthUserData = () => (dispatch ) => {
    authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
          let { Id, email, login } = response.data.data;
          dispatch(setAuthUserData(Id, email, login));
        }
      });
}

export const login = (email, password, rememberMe) => (dispatch ) => {
    authAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
      });
}

export const logOut = () => (dispatch ) => {
    authAPI.logOut().then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
      });
}

export default authReducer;
