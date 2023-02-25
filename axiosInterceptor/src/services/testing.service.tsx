import axios from "axios"

export const TestingService = () => {
    return axios.get("https://ddrickandmortyapi.com/api/character/1")

}