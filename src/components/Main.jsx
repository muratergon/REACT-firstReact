import React from "react";
import banner from "../assets/banner.jpeg";

const Main = () => {
  return (
    <div>
      <div className="absolute h-screen">
        <img
          src={banner}
          alt="main_photo"
          className="h-full w-screen object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative text-center">
          <p className="text-3xl text-purple-700">
            The IT Career of Your Dreams Start here
          </p>
          <p className="text-5xl text-purple-900">Alpha Tech!</p>
          <button className="bg-red-700 px-4 py-2 mt-6 text-white rounded-xl hover:bg-red-900 duration-300">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
