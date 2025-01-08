'use client'


import Navbar from "@/components/navbar/navbar/Navbar";
import About from "@/components/sections/about/About";
import Footer from "@/components/sections/footer/footer";
import GetStarted from "@/components/sections/Get started/GetStarted";
import Features from "@/components/sections/hero/Features";
import Hero from "@/components/sections/hero/hero";
import Properties from "@/components/sections/properties/Properties";
import { auth } from "../../auth";

const HomePage = async() => {
  const session = await auth()
  return (
    <>
      <Navbar session={session} />
      <section className="pb-20">
        <Hero />
        <Features />
        <Properties />
        <About />
        <GetStarted />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
