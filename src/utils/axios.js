import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://auterahwatchers.herokuapp.com/api/',
    withCredentials: false
});