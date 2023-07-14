import axios from "axios"

const instans = axios.create({
    withCredentials: true,
    baseUrl: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        // "API-KEY": "fsdfjsdfjds"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instans
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(function(response) {
            return response.data
        })
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return  instans
    .get(`follow ?page=${currentPage}&count=${pageSize}`)
    .then(function(response) {
        return response.data
    })
}
