import React from "react";

const ContactUs = () => {
  return (
    <div className="py-10 contact text-white">
      <div className="text-center mb-5 mx-5">
        <p className="text-6xl font-thin">Contact us</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro.
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col sm:flex-row justify-evenly max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-3 mx-3 sm:mx-0">
          <input
            placeholder="Name"
            className="sm:w-[25rem] bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white text-black"
          />
          <input
            placeholder="Email"
            className="sm:w-[25rem] bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white text-black"
          />
          <input
            placeholder="Phone Number"
            className="sm:w-[25rem] bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white text-black"
          />
        </div>
        <div className="mx-3 sm:mx-0 mt-5">
          <textarea
            placeholder="Text Area"
            className="sm:w-[25rem] w-full h-full bg-gray-200 rounded-lg px-4 py-3  border focus:border-blue-500 focus:outline-none focus:bg-white text-black resize-none  "
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="bg-red-700 px-5 py-2 hover:bg-red-800 duration-300 rounded-lg text-xl">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
