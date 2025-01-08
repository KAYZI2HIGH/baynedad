// "use client";

// import { properties1 } from "@/lib/constants";
import ShortenText from "@/lib/utils/Shortentext";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import PropertyImgSlide from "./PropertyImgSlide.jsx";
import { getProperty } from "@/lib/fetchData.jsx";


const propertyCard = (property) => (
  <Link
    href={`/properties/${property._id}`}
    className="group py-2 space-y-2 border rounded-md shadow-sm"
    key={property._id}
  >
    <div className="p-3 space-y-3">
      <p className="uppercase small_text text-blue-500 font-bold tracking-widest">
        {property.dateListed}
      </p>
      <h1 className="uppercase normal_text tracking-wider font-semibold group-hover:text-[#BC986B]">
        <ShortenText
          text={property.title}
          maxLength={20}
        />
      </h1>
    </div>
    <div className="h-44">
      <PropertyImgSlide property={property} />
    </div>
    {/* <Swiper
      slidesPerView={1}
      modules={[Navigation]}
      className="w-full h-44 relative overflow-hidden"
      navigation
    >
      {property.images.map((img, index) => (
        <SwiperSlide
          key={index}
          className="group-hover:scale-110 transition-all duration-300"
        >
          <Image
            src={img}
            fill
            alt="property image"
          />
        </SwiperSlide>
      ))}
    </Swiper> */}
    {/* <div className="w-full h-44 relative overflow-hidden">
      <Image
        src={property.images[0]}
        fill
        alt="property image"
        className="group-hover:scale-110 transition-all duration-300"
      />
    </div> */}
    <div className="p-4 space-y-3">
      <div className="normal_text flex gap-2 capitalize items-center w-full text-gray-600 pb-4 border-b group-hover:text-[#BC986B]">
        <MapPin size={15} /> {property.location}
      </div>
      <p className="small_text text-gray-500">{property.description}</p>
    </div>
    {/* <h1 className="body_text tracking-wide pb-3 border-b text-[#BC986B] capitalize">
      {property?.name}
    </h1>
    <div className="flex justify-between">
      {property?.about.map((info, index) => (
        <p className="text-gray-400 small_text">{info[0]}</p>
      ))}
    </div> */}
  </Link>
);

const PropertyGrid = async ({ propertyPerView }) => {
  const properties1 = await getProperty();
  if (properties1.lenght !== 0) {
    return (
      <div className="grid grid-cols-customs w-full gap-7">
        {properties1.map((property, index) => {
          if (propertyPerView === "all") {
            return propertyCard(property, index);
          } else if (index < propertyPerView) {
            return propertyCard(property, index);
          }
        })} 
      </div>
    );
  } else {
    return <h1>No property listing at the moment</h1>;
  }
};

export default PropertyGrid;
