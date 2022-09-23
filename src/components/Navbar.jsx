import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleBar, setToggleBar] = useState(false);

  return (
    <>
      <div className="bg-[#212529] flex justify-between sm:justify-around text-white py-3 sm:fixed z-10 w-full">
        <div className="text-xl ml-5 sm:ml-0">Alpha Tech</div>
        <div>
          <div
            className="sm:hidden mr-5 p-2 text-3xl cursor-pointer"
            onClick={() => setToggleBar(!toggleBar)}
          >
            <MdMenu />
          </div>

          <ul className="sm:flex hidden">
            {["Services", "Portfolio", "About Us", "Staff", "Contact Us"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="p-2 text-gray-400 hover:text-gray-300 duration-300"
                >
                  <a href="!#">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {toggleBar && (
        <div className="bg-[#212529] pb-2 sm:hidden absolute w-full z-10">
          <ul className="ml-[0.7rem]">
            {["Services", "Portfolio", "About us", "Staff", "Contact Us"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="p-2 text-gray-400 hover:text-gray-300 duration-300"
                >
                  <a href="!#">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
