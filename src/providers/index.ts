import axios from "axios"

export const baseURL = 'https://localhost:7143/api/'

export const Api = axios.create({
    baseURL: baseURL
});