import axios, {AxiosResponse} from "axios";
import {InitialStateType} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "daa5219f-4bd1-4a25-b139-227a461bb757"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<InitialStateType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollow(uID: number) {
        return instance.delete<any>(`follow/${uID}`)
    },
    follow(uID: number) {
        return instance.post<any>(`follow/${uID}`)
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`,{status})
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    auth(data: MyFormValues){
        return instance.post<AxiosResponse<ResponseType<{userId: number}>>>(`auth/login`, data)
    }
}

 export type MyFormValues = {
    password: string
    email: string
    rememberMe?: boolean
    captcha?: string
}

type ResponseType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}