import React from "react";
import LoadingBar from "react-redux-loading-bar";

const Loading = () => {
  return (
    <div className="top-0 fixed z-20 h-2 w-full">
      <LoadingBar />
    </div>
  );
};

export default Loading;
