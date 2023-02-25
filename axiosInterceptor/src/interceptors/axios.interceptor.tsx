import axios, {
    AxiosRequestConfig,
    AxiosResponse
} from "axios";
import { getValidateError } from "../assets/utilities";

export const AxiosInterceptor = () => {
    const uptatedHeader = (request: any) => {
        // const jwt = localStorage.getItem('jwt'):
        const jwt = "111225556255645";
        const newHeaders = {
            Authorization: jwt,
            "Content-Type": "application/json",
        };
        request.headers = newHeaders;
        return request;
    };

    axios.interceptors.request.use((request) => {
        if (request.url?.includes("assets")) return request;
        return uptatedHeader(request);
    });

    axios.interceptors.response.use(
        (response) => {
            console.log(response)
            return response;
        },
        (error) => {
            console.log("error", getValidateError(error.code))
            return Promise.reject(error)
        }
    );
};
