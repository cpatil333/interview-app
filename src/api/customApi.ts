import axios from "axios";

export const customApi = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})