

const BASE_URL = process.env.NEXT_PUBLIC_ENVIRONMENT == 'prod' ? "https://book-hub-backend-rho.vercel.app/api"  : "http://localhost:8000/api";
console.log(BASE_URL);
export const LOGIN_WITH_GOOGLE_API = `${BASE_URL}/google-signin`;
export const GET_LOCATION_FROM_POINTS_AND_UPDATE_USER_API = `${BASE_URL}/get-location-from-points-and-update-user`;
export const GET_LOCATION_FROM_POINTS_API = `${BASE_URL}/get-location-from-points`
export const GET_LOGGED_IN_USER = `${BASE_URL}/get-user`;
export const ADD_BOOK_API = `${BASE_URL}/add-books`;
export const GET_BOOKS_NEAR_API = `${BASE_URL}/nearest-book`;
export const GET_BOOKS_API = `${BASE_URL}/get-books`;
export const GET_USER_BOOKS_API = `${BASE_URL}/get-user-books`
export const GET_BOOK_DEATILS_BY_ID_API = `${BASE_URL}/get-book-details-by-id`;
export const REQUEST_CALLBACK_API =  `${BASE_URL}/request-callback`;
export const GET_SEARCH_LENGTH_API = `${BASE_URL}/get-search-length`;
export const GET_USER_QUERIES_API = `${BASE_URL}/get-user-queries`;
export const GET_SEARCH_RESULT_API = `${BASE_URL}/get-search-result`;
export const DELETE_BOOK_API = `${BASE_URL}/delete-books`;