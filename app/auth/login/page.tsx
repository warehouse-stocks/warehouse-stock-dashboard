import LoginForm from "@/components/views/login/LoginForm";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
