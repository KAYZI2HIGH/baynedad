"use client";

import { registerFormAction } from "@/lib/actions";
import { CircularProgress } from "@mui/material";
import { XCircle } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Form = () => {
  
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [serverMessage, setServerMessage] = useState(null);

   const submit = async (data) => {
     try {
       const res = await registerFormAction(data);
       if (res.error) {
         if (res.error === 'User already exist.') {
           setError('email', {type: 'manual', message: res.error})
         } else setServerMessage(res.error)
       } else {
         router.push('/login')
       }
     } catch (error) {
       console.log(error);
       console.log("Somthing went wrong when submitting new user data.");
     }
   };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-4 w-full"
    >
      {serverMessage && (
        <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
          <XCircle className="text-2xl" />
          <p className="normal_text font-semibold">{serverMessage}</p>
        </div>
      )}
      <div>
        <input
          {...register("name", {
            required: "You need to input your full name.",
          })}
          name="name"
          type="text"
          className={`py-2 px-4 border border-gray-400 outline-none bg-transparent w-full max-w-[300px] rounded text-sm tracking-wide ${
            errors.name && "border-red-700"
          }`}
          placeholder="your fullname"
        />
        {errors.name && (
          <p className="text-red-500 text-sm tracking-wider">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("email", {
            required: "This field is required.",
          })}
          name="email"
          type="email"
          className={`py-2 px-4 border border-gray-400 outline-none bg-transparent w-full max-w-[300px] rounded text-sm tracking-wide ${
            errors.email && "border-red-700"
          }`}
          placeholder="your_example@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm tracking-wider">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("phone", {
            required: "This field is required.",
          })}
          name="phone"
          type="tel"
          className={`py-2 px-4 border border-gray-400 outline-none bg-transparent w-full max-w-[300px] rounded text-sm tracking-wide ${
            errors.phone && "border-red-700"
          }`}
          placeholder="+234 812 304 0916"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm tracking-wider">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("password", {
            required: "Enter your password.",
          })}
          name="password"
          type="password"
          className={`py-2 px-4 border border-gray-400 outline-none bg-transparent w-full max-w-[300px] rounded text-sm tracking-wide ${
            errors.password && "border-red-700"
          }`}
          placeholder="yourstrongpassword"
        />
        {errors.password && (
          <p className="text-red-500 text-sm tracking-wider">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className={`w-full bg-black hover:opacity-80 transition-all duration-300 text-white uppercase tracking-wide py-2 rounded ${
          isSubmitting && "opacity-50"
        }`}
      >
        {!isSubmitting ? (
          <>register</>
        ) : (
          <>
            <CircularProgress size="18px" />
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
