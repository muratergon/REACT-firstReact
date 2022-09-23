import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-[#212529] flex justify-between sm:justify-around text-white py-3">
      <div className="text-xl ml-5 sm:ml-0">Alpha Tech</div>
      <div>
        <div className="sm:hidden mr-5 p-2 text-3xl cursor-pointer">
          <MdMenu />
        </div>

        <ul className="sm:flex hidden">
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
    </div>
  );
};

export default Navbar;
