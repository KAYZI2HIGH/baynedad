
import { connectToDB } from "@/lib/mongo";
import { Property } from "@/lib/mongo/models";

import { auth } from "../../../auth";
import Image from "next/image";
import ShortenText from "@/lib/utils/Shortentext";
import Link from "next/link";
import { deleteProperty } from "@/lib/actions";
import DeletePropertyForm from "../form/DeletePropertyForm";

const adminListing = async (session) => {
  await connectToDB();

  const properties = await Property.find({ agentId: session.user.id });

  return properties;
};

const AdminProperties = async ({ session }) => {
  const properties = await adminListing(session);


  return (
    <div className="w-full space-y-5 sticky top-0">
      <h1 className="section_title font-medium tracking-wider">My Listing.</h1>
      <div>
        {properties.length !==0 ? properties.map((property) => { 
          const id = JSON.stringify(property._id)

          return <div
            key={property._id}
            className="w-full p-4 flex items-center justify-between"
          >
            <div className="w-fit space-x-4 flex">
              <img
                src={property.images[0]}
                alt="Property Image"
                height={100}
                width={100}
              />
              <div className="space-y-2">
                <h1 className="normal_text md:hidden">
                  {
                    <ShortenText
                      text={property.title}
                      maxLength={18}
                    />
                  }
                </h1>
                <h1 className="normal_text hidden md:flex">{property.title}</h1>
                <h1 className="small_text">{property.price}</h1>
              </div>
            </div>
            <DeletePropertyForm id={id}/>
          </div>
        }) : <p>You have made no listing at the moment.</p>}
      </div>
    </div>
  );
};

export default AdminProperties;
