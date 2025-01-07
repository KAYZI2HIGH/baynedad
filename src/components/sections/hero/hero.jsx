'use client'

import { Button } from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Hero = () => {

  const router = useRouter();

  return (
    <section
      id="home"
      className="w-full md:h-screen px-5 py-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10 bg-[#0C0B22] text-white"
    >
      <div className="flex flex-col gap-5 flex-1">
        <h1 className="header md:tracking-wide md:font-bold font-semibold">
          A one-stop solution for buying, renting, and maintaining properties.
        </h1>
        <h1 className="body_text text-gray-300">
          Baynedad Property Managers (BPM) simplify property needs with tailored services — from real estate
          and rentals to professional management and maintenance. Trust us for a
          seamless experience.
        </h1>
        <div className="flex gap-5 mx-auto md:mx-0 w-fit">
          <Button
            variant="contained"
            onClick={() => router.push('/properties')}
            className="px-4 py-2 hover:-translate-y-1 transition-all duration-500 hover:bg-blue-800"
          >
            view properties
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push('/contact')}
            className="px-4 py-2 bg-white text-black hover:-translate-y-1 transition-all duration-500"
          >
            contact us
          </Button>
        </div>
      </div>
      <div className="relative md:flex-1 md:h-[500px] w-full h-[300px] z-0 ">
        <Image
          src="/hero.gif"
          alt="hero-img"
          sizes="500"
          priority
          fill
        />
      </div>
    </section>
  );
};

export default Hero;
