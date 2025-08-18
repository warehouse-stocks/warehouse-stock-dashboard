import axiosInstance from "@/libs/axiosInstance";
import { ILogin } from "@/types/Auth";
import endpoint from "./endpoint.constanst";

const authServices = {
  login: (payload: ILogin) =>
    axiosInstance.post(`${endpoint.AUTH}/login`, payload),
};
export default authServices;
