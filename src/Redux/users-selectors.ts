import {StateType} from "./redux-store";

export const usersPage = (state:StateType) => {
    return state.usersPage
}
export const pageSize = (state:StateType) => {
    return state.usersPage.pageSize
}
export const totalUserCount = (state:StateType) => {
    return state.usersPage.totalUserCount
}
export const currentPage = (state:StateType) => {
    return state.usersPage.currentPage
}
export const isDisabled = (state:StateType) => {
    return state.usersPage.isDisabled
}
export const isAuth = (state:StateType) => {
    return state.auth.isAuth
}
