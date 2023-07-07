const FOLLOW = "FOLLOW";
const UNFOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  users: [
    { id: 1, followed: false, fullName: "Mickhael", status: "I am a boss", location: {city: "Moscow", country: "Russia"} },
    { id: 2, followed: true, fullName: "Tatiana", status: "I am a staffboss", location: {city: "Moscow", country: "Russia"} },
    { id: 3, followed: false, fullName: "Alexander", status: "I am a middle", location: {city: "Moscow", country: "Russia"} },
    { id: 4, followed: true, fullName: "Marya", status: "I am a middle", location: {city: "Moscow", country: "Russia"} },
    { id: 5, followed: false, fullName: "Ilia", status: "I am a junior", location: {city: "Moscow", country: "Russia"} },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
        return {
            ...state,
             users: state.users.map(function(u) {
                if(u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
             })
            }
    case UNFOLLOW:
        return {
            ...state,
             users: state.users.map(function(u) {
                if(u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
             })
            }
    case SET_USERS: {
        return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUserAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
