import axiosInstance from "../axiosInstance";
import {REQUEST_CALLBACK_API,GET_BOOK_DEATILS_BY_ID_API, GET_USER_BOOKS_API, GET_LOCATION_FROM_POINTS_API,GET_LOGGED_IN_USER, LOGIN_WITH_GOOGLE_API,ADD_BOOK_API, GET_BOOKS_NEAR_API, GET_BOOKS_API, GET_LOCATION_FROM_POINTS_AND_UPDATE_USER_API } from "../endpoints";

export const LOGIN_WITH_GOOGLE_FN = (data) =>{
    try{
        return axiosInstance.post(LOGIN_WITH_GOOGLE_API,data);
    }catch(err){
        return err;
    }
}
export const getLocationFromPointsAndUpdateUser_Fn=(latitude,longitude)=>{
    try{
        return axiosInstance.post(GET_LOCATION_FROM_POINTS_AND_UPDATE_USER_API, {
            latitude,
            longitude,
        });
    }catch(err){
        return err;
    }
}

export const getLocationFromPoints_Fn = (latitude,longitude)=>{
    try{
        console.log("HI")
        return axiosInstance.post(GET_LOCATION_FROM_POINTS_API, {
            latitude,
            longitude,
        });
    }catch(err){
        console.log(err);
        return err;
    }
}

export const checkIfLoggedIn_Fn =()=>{
    try{
        return axiosInstance.get(GET_LOGGED_IN_USER);
    }catch(err){
        return err;
    }
}

export const AddBook_FN= (data)=>{
    try{
        return axiosInstance.post(ADD_BOOK_API, data);
    }catch(err){
        return err;
    }
}
export const getBooksNear_FN = ()=>{
    try{
        return axiosInstance.post(GET_BOOKS_NEAR_API);
    }catch(err){
        return err;
    }
}

export const getSuggestionBooks_FN = ()=>{
    try{
        return axiosInstance.get(GET_BOOKS_API);
    }catch(err){
        return err;
    }
}

export const GET_USER_BOOKS_FN = (userId) =>{
    try{
        return axiosInstance.post(GET_USER_BOOKS_API , userId);
    }catch(err){
        return err;
    }
}

export const GET_BOOK_DEATILS_BY_ID_FN = (bookId)=>{
    try{
        console.log("Dat sending == >", bookId)
        return axiosInstance.post(GET_BOOK_DEATILS_BY_ID_API , {bookId});
    }catch(err){
        return err;
    }
}

export const Request_CallBack_FN = (data)=>{
    try{
        return axiosInstance.post(REQUEST_CALLBACK_API , data);
    }catch(err){
        return err;
    }
}