import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://exquisitartmedia-gallery.herokuapp.com"
})