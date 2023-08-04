import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseUrl: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    // "API-KEY": "fsdfjsdfjds"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(function (response) {
        return response.data;
      });
  },
  follow(usersId) {
    return instance.post(`follow/${usersId}`);
  },
  unfollow(usersId) {
    return instance.delete(`follow/${usersId}`);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
  },
};

export const profileAPI = {
    getProfile(userId) {
      return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
      return instance.get(`profile/status/` + userId);
    },
    updataStatus(status) {
      return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile ) {
        var formData = new FormData()
        formData.append("image ", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
      },
      saveProfile(profile) {
        return instance.put(`profile`, profile);
      }
  };

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login (email, password, rememberMe = false, captcha = null  ) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha });
  },
  logOut ( ) {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
