import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen max-w-3xl bg-amber-400 flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
