import Image from "next/image";
import AboutInfo from "./AboutInfo";
import Agents from "./Agents";
import Services from "./services";

export default function About() {
  return (
    <section
      id="about"
      className="w-full"
    >
      <div className="w-full h-52 relative">
        <Image
          src="/about-us.png"
          alt="about us"
          fill
        />
      </div>
      <Agents />
      <section className="flex flex-col-reverse md:flex-row gap-10 justify-between items-stretch w-full max-w-[1000px] mt-14  mx-auto ">
        <div className="md:flex-1 w-full md:max-w-[400px] h-[480px] relative">
          <Image
            src="/about-thumbnail.png"
            alt="thumbnail"
            fill
          />
        </div>
        <AboutInfo />
      </section>

      <Services />
    </section>
  );
}
