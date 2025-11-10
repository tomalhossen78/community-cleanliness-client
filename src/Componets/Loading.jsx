import React from "react";
import { RingLoader, RiseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div> */}
      <RiseLoader size={20} color="blue" />
    </div>
  );
};

export default Loading;
