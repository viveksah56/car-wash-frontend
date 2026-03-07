import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {APP_CONFIG} from "@/config/app-constant";
import {toast} from "sonner";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: APP_CONFIG.SERVER_REQUEST_TIME,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        const params = config.params

        const query = params
            ? `?${new URLSearchParams(params).toString()}`
            : ''

        console.log(
            '➡️ FULL REQUEST URL:',
            `${config.baseURL}${config.url}${query}`
        )
        return config;
    },
    (error: AxiosError) => {
        console.error("Request Error from axios", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log("⬅️ FULL RESPONSE DATA:", response.data);
        return response.data;
    },
    (error: AxiosError) => {
        console.error("Response Error from axios:", error);

        // if (error.status === 401 && typeof window !== "undefined") {
        //     localStorage.removeItem("_dwork");
        //     localStorage.removeItem("_role");
        //     window.location.href = "/login";
        //
        // }
        if (error.code === "ECONNABORTED") {
            toast.error("Server is taking too long. Please refresh to check status.")
        }


        return Promise.reject(error?.response?.data);
    }
);

export default axiosInstance;


