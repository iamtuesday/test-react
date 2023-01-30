import axios from "axios";

const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://api.github.com"
})

export default baseApi