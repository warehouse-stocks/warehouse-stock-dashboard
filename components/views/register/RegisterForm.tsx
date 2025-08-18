"use client";

import { Box } from "lucide-react";

import { Input } from "../../ui/input";
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

import useRegister from "./useRegister";
import Link from "next/link";
const RegisterForm = () => {
  const { form, control, errors, handleSubmit, handleRegister } = useRegister();

  return (
    <Form {...form}>
      <form
        action=""
        className="w-full"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Card className="py-20">
          <CardHeader className="text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center ">
              <Box className="text-white" size={40} />
            </div>
            <CardTitle className="text-4xl">StockIn</CardTitle>
            <CardDescription className="text-md text-semibold">
              Register a new account
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
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        type="text"
                        {...field}
                        placeholder="Enter your username"
                        className={`w-[300px] text-base px-4 ${
                          errors.username || errors.root ? "border-red-500" : ""
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
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="text"
                        {...field}
                        placeholder="Enter your email"
                        className={`w-[300px] text-base px-4 ${
                          errors.email || errors.root ? "border-red-500" : ""
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
              Register
            </Button>
          </CardFooter>

          <CardFooter className="flex justify-center items-center text-gray-500">
            Already have an account?
            <Link href="/login" className="text-blue-500 mx-1 hover:underline">
              Login here
            </Link>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default RegisterForm;
