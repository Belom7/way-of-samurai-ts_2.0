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
    },
    getProfile(userID: number) {
        console.warn('Obsolete method. Please ProfileAPI object')
        return profileApi.getProfile(userID)
    }
}
export const profileApi = {
    getProfile(userID: number) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userID: number) {
        return instance.get(`/profile/status/${userID}`)
            .then(response => {
                return response
            })
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
    }
}
export const AuthApi = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: any, password: any, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response
            })
    }
}
