import * as axios from "axios";
import React from "react";

//            DAL!!!!!!!!!

// const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  withCredentials: true, //чтобы Кукки присоединились
  headers: { "API-KEY": "213497bc-6064-4b2d-bc21-cd6c10651ec3" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data; //возвращем промис
      });
  },
  unFollowAPI(userId) {
    return instance.delete(`follow/${userId}`);
  },
  followAPI(userId) {
    return instance.post(`follow/${userId}`, {});
  },
};

export const headerAPI = {
  getLogin() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
export const dialogAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  //отправка фото{} на сервер
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  //редактирование профиля
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    debugger;
    return instance.get(`security/get-captcha-url`);
  },
};
