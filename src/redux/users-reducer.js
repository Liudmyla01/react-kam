const follow = 'FOLLOW',
    unfollow = 'UNFOLLOW',
    setUsers = 'SET_USERS',
    setCurrentPage = 'SET_CURRENT_PAGE',
    setTotalUsersCount = 'SET_TOTAL_USERS_COUNT',
    toggleIsFeatching = 'TOGGLE_IS_FEATCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCpunt: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })

            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case setUsers:
            return {
                ...state,
                users: [...action.users]
            }
        case setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setTotalUsersCount:
            return {
                ...state,
                totalUserCpunt: action.count
            }
        case toggleIsFeatching:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: follow, userID });
export const unfollowAC = (userID) => ({ type: unfollow, userID });
export const setUsersAC = (users) => ({ type: setUsers, users });
export const setCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: setTotalUsersCount, count: totalUsersCount });
export const setisFetchingAC = (isFetching) => ({ type: toggleIsFeatching, isFetching:isFetching  });
export default usersReducer;