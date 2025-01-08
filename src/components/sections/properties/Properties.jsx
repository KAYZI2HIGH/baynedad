import Link from "next/link";

import PropertyGrid from "./PropertyGrid";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

const Properties = () => {
  return (
    <section
      id="properties"
      className="flex flex-col gap-5 w-full max-w-[1000px] mx-auto px-10 pb-10"
    >
      <h1 className="header font-semibold tracking-wide under w-fit mx-auto mb-6">
        Explore Properties
      </h1>
      <div className="w-full p-2 flex justify-between items-center">
        <h1 className="section_title tracking-wider">Recent Properties</h1>
        <Link
          href="/properties"
          className="flex place-items-center hover:text-gray-500 tracking-wide font-light underline"
        >
          See all Properties
        </Link>
      </div>
      <Suspense fallback={<Loader />}>
        <PropertyGrid propertyPerView={3} />
      </Suspense>
      <Link
        href="/properties"
        className="bg-[#B99368] text-white mt-5 mb-10 uppercase py-3 tracking-wide px-7 rounded inline-block w-fit mx-auto hover:opacity-80"
      >
        View All Properties
      </Link>
    </section>
  );
};

export default Properties;
