import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fe474fb0-e353-423b-ba4a-43fb90adef85'},
})

export const usersApi = {
    getUsers(currentPage: number) {
        return instance.get(`users?count=${10}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userID: number) {
        return instance.post(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    }
}
