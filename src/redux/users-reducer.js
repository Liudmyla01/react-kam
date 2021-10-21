const follow = 'FOLLOW' ;
const unfollow = 'UNFOLLOW';
const setUsers = 'SET_USERS';

let initialState = {
    users:[
        ]
}

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case follow:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed:true}
                    }
                    return u
                })

            }
        case unfollow:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed:false }
                    }
                    return u
                })
            }
        case setUsers:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID)=> ({type: follow, userID});
export const unfollowAC = (userID)=> ({type: unfollow, userID});
export const setUsersAC = (users)=> ({type: setUsers, users});
export default usersReducer;