import createSelector from "reselect"

const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers  = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize  = (state) => {
    return state.usersPage.pageSize
} 

export const getTotalUsersCount  = (state) => {
    return state.usersPage.totalUsersCount 
} 

export const getCurrentPage  = (state) => {
    return state.usersPagecurrentPage 
} 

export const getIsFetching  = (state) => {
    return state.usersPage.isFetching 
} 

export const getFollowingInProgress  = (state) => {
    return state.usersPage.followingInProgress
} 