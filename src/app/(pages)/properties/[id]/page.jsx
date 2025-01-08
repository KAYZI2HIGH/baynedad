import AgentCard from "@/components/sections/properties/AgentCard";
import FeaturesCard from "@/components/sections/properties/FeaturesCard";
import PropertyImgSlide from "@/components/sections/properties/PropertyImgSlide";
import { connectToDB } from "@/lib/mongo";
import ShortenText from "@/lib/utils/Shortentext";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import Button from "@mui/material/Button";
import Loader from "@/components/loader/Loader";

import Form from "@/components/form/Form";

const getProperty = async (id) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/properties/${id}`);

  if (!res.ok) {
    console.log("something went wrong");
  } else {
    return res.json();
  }
};

const PropertyPage = async ({ params }) => {

  const id = (await params).id;
  const property = await getProperty(id);

  return (
    <section className="bg-slate-100">
      <div className="w-full h-64 md:h-96 relative flex justify-center items-center mb-4">
        <PropertyImgSlide property={property} />
        {/* <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"></div> */}
        {/* <h1 className="section_title text-white tracking-widest font-semibold relative text-center">{ property.title}</h1> */}
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-10 pb-20">
        <div className="md:w-[60%] space-y-3">
          <div className="flex justify-center items-center gap-2 text-sm w-fit text-slate-600 font-semibold tracking-wider ">
            <MapPin size={15} />
            <h4>{property.location}</h4>
          </div>
          <div className="flex justify-between body_text md:section_title font-semibold tracking-wide pb-7 border-b">
            <h1 className="hidden sm:block">{property.title}</h1>
            <h1 className=" sm:hidden">
              {
                <ShortenText
                  text={property.title}
                  maxLength={20}
                />
              }
            </h1>
            <h4>{property.price}</h4>
          </div>
          <div className="space-y-4 pb-7 border-b">
            <h1 className="body_text md:section_title  font-semibold tracking-wider">
              Property Details:
            </h1>
            <h1 className="normal_text tracking-wide text-gray-400">
              {property.description}
            </h1>
          </div>
          <div className="space-y-3 pb-7 border-b">
            <h1 className="body_text md:section_title font-semibold tracking-wider">
              Features:
            </h1>
            <div className="flex gap-5 flex-wrap">
              {property.features.map((feature, index) => (
                <FeaturesCard
                  text={feature}
                  key={index}
                />
              ))}
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <AgentCard agentId={property.agentId} />
          </Suspense>
        </div>
       <Form/>
      </div>
    </section>
  );
};

export default PropertyPage;
