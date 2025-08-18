"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { ILogin } from "@/types/Auth";
import authServices from "@/services/auth";
import { AxiosError } from "axios";

const loginSchema = z.object({
  identifier: z.string().nonempty("Invalid email/username"),
  password: z.string().min(6),
});

const useLogin = () => {
  const router = useRouter();

  const form = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = form;

  const loginService = async (payload: ILogin) => {
    try {
      const result = await authServices.login(payload);
      return result;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Login failed");
    }
  };

  const { mutate: mutateLogin, isPending } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      router.push("/");
    },
    onError: (error) => {
      setError("root", {
        message: error.message,
      });
      console.error("Login error:", error);
    },
  });

  const handleLogin = (data: ILogin) => mutateLogin(data);

  return {
    control,
    errors,
    handleSubmit,
    handleLogin,
    isPending,
    form,
  };
};

export default useLogin;
