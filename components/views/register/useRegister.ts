"use client";

import z from "zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { IRegister } from "@/types/Auth";
import authServices from "@/services/auth";

const registerSchema = z.object({
  username: z.string().nonempty("Invalid email/username"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const useRegister = () => {
  const router = useRouter();

  const form = useForm<IRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = form;

  const registerService = async (payload: IRegister) => {
    try {
      const result = await authServices.register(payload);
      return result;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Register failed");
    }
  };

  const { mutate: mutateRegister, isPending: isRegistering } = useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      router.push("/register-success");
      console.log("Register successful:", data);
    },
    onError: (error) => {
      setError("root", {
        message: "Email/username already in use",
      });
      console.error("Login error:", error);
    },
  });

  const handleRegister = (data: IRegister) => mutateRegister(data);

  return {
    control,
    errors,
    handleSubmit,
    handleRegister,
    isRegistering,
    form,
  };
};

export default useRegister;
