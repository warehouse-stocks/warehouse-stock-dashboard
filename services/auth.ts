import endpoint from "./endpoint.constanst";
import axiosInstance from "@/libs/axiosInstance";
import { ILogin, IRegister } from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) =>
    axiosInstance.post(`${endpoint.AUTH}/register`, payload),
  login: (payload: ILogin) =>
    axiosInstance.post(`${endpoint.AUTH}/login`, payload),
};
export default authServices;
