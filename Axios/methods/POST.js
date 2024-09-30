import axiosInstance from "../axiosInstance";
import { GET_LOCATION_FROM_POINTS_API, GET_LOGGED_IN_USER, LOGIN_WITH_GOOGLE_API,ADD_BOOK_API } from "../endpoints";

export const LOGIN_WITH_GOOGLE_FN = (data) =>{
    try{
        return axiosInstance.post(LOGIN_WITH_GOOGLE_API,data);
    }catch(err){
        return err;
    }
}
export const getLocationFromPoints_Fn=(latitude,longitude)=>{
    try{
        return axiosInstance.post(GET_LOCATION_FROM_POINTS_API, {
            latitude,
            longitude,
        });
    }catch(err){
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