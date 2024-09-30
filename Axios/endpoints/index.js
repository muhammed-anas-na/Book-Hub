

const BASE_URL = process.env.ENVIRONMENT == 'prod' ? ""  : "http://localhost:8000/api";
console.log(BASE_URL);
export const LOGIN_WITH_GOOGLE_API = `${BASE_URL}/google-signin`;
export const GET_LOCATION_FROM_POINTS_API = `${BASE_URL}/get-location-from-points`;
export const GET_LOGGED_IN_USER = `${BASE_URL}/get-user`;
export const ADD_BOOK_API = `${BASE_URL}/add-books`;