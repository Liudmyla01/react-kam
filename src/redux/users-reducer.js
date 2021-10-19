const follow = 'FOLLOW' ;
const unfollow = 'UNFOLLOW';
const setUsers = 'SET_USERS';

let initialState = {
    users:[
        {id:1,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:true, fullName: 'Liudmyla', status: 'Frontend devel', location:{country: 'Ukraine', city:'Nikolaev'}},
        {id:1,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:true, fullName: 'Igor', status: 'machine master', location:{country: 'Ukraine', city:'Kiyev'}},
        {id:1,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:false, fullName: 'Tom', status: 'waiter', location:{country: 'Romania', city:'Bicaz'}},
        {id:1,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:true, fullName: 'Alex', status: 'Co-founder', location:{country: 'Ukraine', city:'Kiyev'}},
        {id:1,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:false, fullName: 'Dima', status: 'guru', location:{country: 'Belarus', city:'Minsk'}},
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
                users: [...state.users, action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID)=> ({type: follow, userID});
export const unfollowAC = (userID)=> ({type: unfollow, userID});
export const setUsersAC = (userID)=> ({type: setUsers, userID});
export default usersReducer;