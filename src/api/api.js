import * as axios from "axios";
//instance - экземпляр axios с уже настроеными нужными параметрами для запросов
const instance = axios.create({
        withCredentials: true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "cf8d67d9-8199-46f6-a219-04d2a9b16456"
        }
    
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
    return   instance.get(`users?page=${currentPage}&count=${pageSize}`, 
                        ).then(response => {
                            return response.data});
    }    
    
} 



