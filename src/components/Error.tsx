import React from "react";
import errorGif from "assets/img/source.gif";
const Error = () => {
  return (
    <div className="text-center text-danger">
      <h1 className="mb-4">
        Couldn't get any characters. <span>Error 404</span>{" "}
      </h1>
      ;
      <img className="w-50 h-50 text-center" src={errorGif} alt="Error" />
    </div>
  );
};

export default Error;
