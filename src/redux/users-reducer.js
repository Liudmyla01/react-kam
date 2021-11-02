import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW',
UNFOLLOW= 'UNFOLLOW',
SET_USERS = 'SET_USERS',
SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
TOGGLE_IS_FEATCHING = 'TOGGLE_IS_FEATCHING',
TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUserCpunt: 0,
    currentPage: 1,
    isFetching: true,
    followinginProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCpunt: action.count
            }
        case TOGGLE_IS_FEATCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {
                    ...state,
                    followinginProgress: action.followinginProgress 
                    ? [...state.followinginProgress, action.userId]
                    : state.followinginProgress.filter(id => id != action.userId)
                }
        default:
            return state
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFeatching = (isFetching) => ({ type: TOGGLE_IS_FEATCHING, isFetching:isFetching  });
export const toggleIsFollowingProgress =(followinginProgress, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, followinginProgress, userId})

export const getUsers = (currentPage, pageSize) => { 
    return (dispatch) =>{
    dispatch(toggleIsFeatching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFeatching(false ));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount))      
    })

}
}
export const followSucces = (userID) => { 
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userID))
        usersAPI.followUsers(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        });

}  
}
export const unfollowSucces = (userID) => { 
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userID))
        usersAPI.unfollowUsers(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        });

}
}


export default usersReducer; 
