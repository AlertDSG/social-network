import axios from "axios";
import {InitialStateType} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY" : "daa5219f-4bd1-4a25-b139-227a461bb757"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<InitialStateType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                console.log(res)
                return res.data})
    }
}


