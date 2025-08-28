import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-black/20">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
