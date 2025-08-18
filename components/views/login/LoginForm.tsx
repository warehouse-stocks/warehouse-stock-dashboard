"use client";

import Link from "next/link";

import { Input } from "../../ui/input";
import Logo from "@/components/ui/logo";
import { Button } from "../../ui/button";
import { PasswordInput } from "../../ui/password-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";

import useLogin from "./useLogin";

const LoginForm = () => {
  const { form, control, errors, handleSubmit, handleLogin } = useLogin();

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
        <Card className="py-20">
          <CardHeader className="text-center flex flex-col items-center gap-4">
            <Logo className="w-10 h-10" />
            <CardTitle className="text-4xl">StockIn</CardTitle>
            <CardDescription className="text-md font-semibold text-gray-700">
              Login to your account
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-6">
            {/* Error global */}
            {errors.root && (
              <p className="text-md text-red-500 text-center">
                {errors.root.message}
              </p>
            )}
            <FormField
              control={control}
              name="identifier"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email/Username</FormLabel>
                    <FormControl>
                      <Input
                        id="identifier"
                        type="text"
                        {...field}
                        placeholder="Enter your email/username"
                        className={`w-[300px] text-base px-4 ${
                          errors.identifier || errors.root
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        id="password"
                        type="password"
                        {...field}
                        placeholder="Enter your password"
                        className={`w-[300px] text-base px-4 ${
                          errors.password || errors.root ? "border-red-500" : ""
                        }`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </CardContent>

          <CardFooter className="flex justify-center items-center">
            <Button
              type="submit"
              className="w-[300px] cursor-pointer"
              variant="default"
            >
              Login
            </Button>
          </CardFooter>

          <CardFooter className="flex justify-center items-center text-gray-500">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="text-blue-600 mx-1 hover:underline"
            >
              Create account
            </Link>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default LoginForm;
