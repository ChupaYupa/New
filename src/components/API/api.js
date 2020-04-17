import * as axios from "axios";
import React from 'react';

//            DAL!!!!!!!!!

// const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "213497bc-6064-4b2d-bc21-cd6c10651ec3"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
   getUsers (currentPage = 1, pageSize= 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;       //возвращем промис
            });
    },
    unFollowAPI(userId) {
       return  instance.delete(`follow/${userId}`,)
       },
    followAPI(userId) {
        return  instance.post(`follow/${userId}`, {},)
    },
    }

    export const headerAPI = {
        getLogin () {
            return instance.get(`auth/me`,)
        }
    }
    export const dialogAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`,)
    },
        getStatus(userId) {
            return instance.get(`profile/status/${userId}`,)
        },
        updateStatus(status) {
            return instance.put(`profile/status`, {status: status})
        },

}




