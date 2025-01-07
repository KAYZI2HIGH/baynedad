
import BackButton from "@/components/backbutton/BackButton";
import { ArrowLeft, MoveLeft } from "lucide-react";
import Link from "next/link";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const LoginLayout = async({ children }) => {
  const session = await auth();
  console.log(session)

  if (session?.user) {
    redirect('/')
  }
  return (
    <div className=" antialiased px-10 py-10 flex flex-col  w-full h-screen bg-white">
      <BackButton/>
      {children}
    </div>
  );
};

export default LoginLayout;
