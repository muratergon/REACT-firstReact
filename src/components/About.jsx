import React from "react";
import { AboutUs } from "../assets";

const About = () => {
  return (
    <div className="py-10">
      <div className="text-center my-10">
        <p className="text-6xl font-thin">About</p>
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum
          deserunt ipsa eum tenetur! Labore incidunt beatae quos autem quod
          similique obcaecati dolore odit cupiditate! Ad perferendis beatae
          consequatur nostrum?
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col-reverse sm:flex row mx-10 justify-center">
        <div className="mt-4 sm:mt-0 mx-4">
          {[
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum",
          ].map((item, idx) => (
            <p key={idx} className="p-2">
              {item}
            </p>
          ))}
        </div>
        <div>
          <img src={AboutUs} alt="ads" className="rounded-2xl sm:h-[20rem]" />
        </div>
      </div>
    </div>
  );
};

export default About;
