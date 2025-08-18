import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen max-w-xl flex items-center justify-center mx-auto">
      {children}
    </div>
  );
};

export default AuthLayout;
