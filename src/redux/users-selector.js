export const getAllUsers = (state) => {
    return state.userPage.users;
}
export const getPageSize = (state) => {
    return state.userPage.pageSize;
}
export const getTotalUserCpunt = (state) => {
    return state.userPage.totalUserCpunt;
}
export const getCurrentPage = (state) => {
    return state.userPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.userPage.isFetching;
}
export const getFollowinginProgress = (state) => {
    return state.userPage.followinginProgress;
}
