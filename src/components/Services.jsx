import React from "react";
import { BiCode } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineNetworkWifi } from "react-icons/md";
import ServicesCart from "./ServicesCart";

const Services = () => {
  return (
    <div className="my-10 h-auto">
      <div className="text-center">
        <p className="text-6xl font-thin">Services</p>
        <p className="mt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ad
          alias quo fugiat in. Minus eos id iure laboriosam assumenda.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row mt-[3rem] justify-evenly gap-3">
        {/* asdd */}
        <ServicesCart title="Programming" icons={<BiCode />} />
        <ServicesCart title="Design" icons={<MdDesignServices />} />
        <ServicesCart title="Networking" icons={<MdOutlineNetworkWifi />} />
        {/* asdad */}
      </div>
    </div>
  );
};

export default Services;
