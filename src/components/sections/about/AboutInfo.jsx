"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Button from "@mui/material/Button";

import { about } from "@/lib/constants";
import { Link } from "react-scroll";

const AboutInfo = () => {
  const [page, setPage] = useState("about us");

  return (
    <div className="flex flex-col gap-8 bg-slate-800 text-slate-200 p-16 flex-1 w-full justify-center">
      <h1 className="section_title under tracking-wide mb-5">
        Experience since 1980
      </h1>
      <div className="flex items-center justify-between">
        <p
          onClick={() => setPage("about us")}
          className="text-xs lg:text-sm traking-wide uppercase text-gray-400 cursor-pointer w-full"
        >
          about us
        </p>
        |
        <p
          onClick={() => setPage("mission")}
          className="text-xs lg:text-sm traking-wide uppercase text-gray-400 cursor-pointer w-full text-center"
        >
          mission
        </p>
        |
        <p
          onClick={() => setPage("goal")}
          className="text-xs lg:text-sm traking-wide uppercase text-gray-400 cursor-pointer w-full text-center"
        >
          goal
        </p>
      </div>
      {about.map((ab, idx) => {
        if (page === ab.title)
         return (
          <motion.p
            initial={{ y: "4px", opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             key={idx}
            className="text-xs lg:text-sm text-gray-300"
          >
            {ab.desc}
          </motion.p>
        )
      })}
      <Link to="contact">
        <Button
          variant="contained"
          color="primary"
          className="font-bold tracking-widest bg-white text-blue-950 transition-all duration-300"
        >
          get in touch
        </Button>
      </Link>
    </div>
  );
};

export default AboutInfo;
