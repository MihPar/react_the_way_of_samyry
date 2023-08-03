import axios from "axios";

const instans = axios.create({
  withCredentials: true,
  baseUrl: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    // "API-KEY": "fsdfjsdfjds"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(function (response) {
        return response.data;
      });
  },
  follow(usersId) {
    return instans.post(`follow/${usersId}`);
  },
  unfollow(usersId) {
    return instans.delete(`follow/${usersId}`);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
  },
};

export const profileAPI = {
    getProfile(userId) {
      return instans.get(`profile/` + userId);
    },
    getStatus(userId) {
      return instans.get(`profile/status/` + userId);
    },
    updataStatus(status) {
      return instans.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile ) {
        var formData = new FormData()
        formData.append("image ", photoFile)
        return instans.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
      },
      saveProfile(profile) {
        return instans.put(`profile`, profile);
      }
  };

export const authAPI = {
  me() {
    return instans.get(`auth/me`);
  },
  login (email, password, rememberMe = false ) {
    return instans.post(`auth/login`, {email, password, rememberMe});
  },
  logOut ( ) {
    return instans.delete(`auth/login`);
  },
};
