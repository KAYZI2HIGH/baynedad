import AddPropertyForm from "@/components/admincomponents/AddPropertyForm";
import AdminProperties from "@/components/admincomponents/AdminProperties";
import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const page = async() => {

  
  const session = await auth();

  if (!session?.user?.isAdmin) {
    redirect('/')
  }

  return (
    <div className="pb-10">
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
                href="/addproperty"
                className="normal_text text-slate-500 group-hover:underline cursor-pointer"
              >
                Add a Listing.
              </Link>
            </div>
          </div>
          <h1 className="header text-slate-600">Add Property</h1>
        </div>
      </div>
      <div className=" mx-auto py-10 px-7 md:px-20 flex flex-col md:flex-row gap-10  md:overflow-auto md:h-screen">
        <AddPropertyForm session={session} />
        <AdminProperties session={session} />
      </div>
    </div>
  );
};

export default page;
