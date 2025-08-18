import environment from "@/configs/environment";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface CustomSession extends Session {
  accessToken?: string;
}

const headers = { "Content-Type": "application/json" };

const axiosInstance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000, // 60 seconds
});

axiosInstance.interceptors.request.use(
  async (request) => {
    // Add any request interceptors here if needed
    // const session: CustomSession | null = await getSession();

    // if (session && session.accessToken) {
    //   request.headers.Authorization = `Bearer ${session.accessToken}`;
    // }
    return request;
  },
  (error) => {
    // Handle request errors
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle response errors
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
