"use client";

import z from "zod";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";

import { ILogin } from "@/types/Auth";

const loginSchema = z.object({
  identifier: z.string().nonempty("Invalid email/username"),
  password: z.string().min(6),
});

const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl: string =
    (searchParams.get("callbackUrl") as string) || "/";

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
      const result = await signIn("credentials", {
        ...payload,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Login failed");
    }
  };

  const { mutate: mutateLogin, isPending: isLoggedIn } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      router.push("/dashboard");
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
    isLoggedIn,
    form,
  };
};

export default useLogin;
