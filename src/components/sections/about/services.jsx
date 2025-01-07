import React from "react";
import { services } from "@/lib/constants";

const Services = () => {
  return (
    <div className="space-y-14 p-10 md:p-20">
      <h1 className="header tracking-wider font-medium w-fit under">
        What we Offer
      </h1>
      <div className="grid grid-cols-customs1 w-full gap-10">
        {services.map((service, index) => (
          <div
            className="flex flex-col items-center justify-center gap-5 shadow-md p-10 cursor-pointer group hover:-translate-y-4 transition-all duration-300 rounded-md bg-slate-100 overflow-hidden"
            key={index}
          >
            <div className="w-fit mx-auto">{service.icon}</div>
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-500 body_text font-medium tracking-wider text-center capitalize group-hover:text-[#BC986B] transition-all duration-300">
                {service.title}
              </h1>
              <p className="small_text capitalize text-gray-400 text-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
