
import Form from "@/components/registerform/Form";
import { register } from "@/lib/actions";
import { connectToDB } from "@/lib/mongo";
import { User } from "@/lib/mongo/models";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const RegisterPage = () => {

 

  return (
    <div className="w-full max-w-[300px] mx-auto my-auto flex flex-col items-center gap-4 text-[#09090b]">
      <Link
        href={"/"}
        className="text-3xl font-extrabold text-sky-950 hover:text-[#BC986B] tracking-wide"
      >
        BPM
      </Link>
      <div className="space-y-1">
        <h2 className="body_text tracking-wide leading-normal font-bold text-center">
          Create an account
        </h2>
        <p className="text-center text-gray-400 max-w-`[300px]">
          Enter your name, email and password to create an account.
        </p>
      </div>
      <Form/>
      <div className="text-xs mt-4 flex justify-center items-center uppercase w-full text-gray-400">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <p className="whitespace-nowrap mx-3"> or continue with </p>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
      <div className="flex justify-center items-center text-sm w-full border rounded py-3 gap-1 cursor-pointer">
        <Image
          alt="google logo"
          src="/google.png"
          width={20}
          height={20}
        />{" "}
        <p>Google</p>
      </div>
      <div className=" text-sm mt-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-sm underline tracking-wide text-gray-400 hover:text-gray-800 transition-all duration-500"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
