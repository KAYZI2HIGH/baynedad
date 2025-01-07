import Loader from "@/components/loader/Loader";
import PropertyGrid from "@/components/sections/properties/PropertyGrid";
import Link from "next/link";
import { Suspense } from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const PropertiesPage = async () => {
  const session = await auth();

  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="w-full bg-slate-100">
        <div className="flex flex-col gap-2 w-full mx-auto max-w-[1000px] px-10 py-10 ">
          <div className="flex gap-4">
            <div className="space-x-2 flex items-center justify-center group">
              <div className="size-2 rounded-full bg-blue-400"></div>
              <Link
                href="/"
                className="normal_ text text-slate-500 group-hover:underline cursor-pointer"
              >
                Home
              </Link>
            </div>
            <div className="space-x-2 flex items-center group justify-center">
              <div className="size-2 rounded-full bg-blue-400"></div>
              <Link
                href="properties"
                className="normal_text text-slate-500 group-hover:underline cursor-pointer"
              >
                Property Listing
              </Link>
            </div>
          </div>
          <h1 className="header text-slate-600">Property Listing</h1>
        </div>
      </div>
      <div className="flex flex-col  w-full mx-auto max-w-[1000px] px-10 pb-20">
        {session?.user ? (
          <Suspense fallback={<Loader />}>
            <PropertyGrid propertyPerView={"all"} />
          </Suspense>
        ) : (
            <div>
              Login to view all Properties. <Link href={'/login'} className="underline text-blue-400 text-sm">Proceed to Login.</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
