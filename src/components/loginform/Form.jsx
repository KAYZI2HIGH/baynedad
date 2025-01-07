'use client'

import { loginFormAction } from "@/lib/actions";
import { XCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

const Form = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();
  
  const router = useRouter();



  const [serverMessage, setServerMessage] = useState(null);
  
     const submit = async (data) => {
       try {
         const res = await loginFormAction(data);
         if (res?.error) {
           setServerMessage(res.error)
          } else {
            router.push('/')
            console.log('Logged in')
         }
        
       } catch (error) {
         console.log(error);
         console.log("Somthing went wrong when submitting new user data.");
       }
  };
  
  console.log()

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-4"
    >
      {serverMessage && (
        <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
          <XCircle className="text-2xl" />
          <p className="normal_text font-semibold">{serverMessage}</p>
        </div>
      )}
      <input
        {...register("email", {
          required: "Please fill in this field.",
        })}
        name="email"
        type="email"
        className={`py-2 px-4 border border-gray-400 outline-none bg-transparent w-full max-w-[300px] rounded text-sm tracking-wide ${
          errors.email || (serverMessage && "border-red-700")
        }`}
        placeholder="bpm@example.com"
      />
      {errors.email && (
        <p className="text-red-500 text-sm tracking-wider">
          {errors.email.message}
        </p>
      )}
      <input
        {...register("password", {
          required: "Input your password.",
        })}
        name="password"
        type="password"
        className={`py-2 px-4 border border-gray-400 outline-none bg-transparent w-full max-w-[300px] rounded text-sm tracking-wide  ${
          errors.password || (serverMessage && "border-red-700")
        }`}
        placeholder="yourstrongpassword"
      />
      {errors.password && (
        <p className="text-red-500 text-sm tracking-wider">
          {errors.password.message}
        </p>
      )}
      <button
      disabled={isSubmitting}
        className={`w-full bg-black hover:opacity-80 transition-all duration-300 text-white uppercase tracking-wide py-2 rounded ${isSubmitting && 'bg-opacity-60'}`}>
        {!isSubmitting ? (
          <>
            login
          </>
        ) : (
          <>
            <CircularProgress size="18px" />
          </>
        )}
      </button>
    </form>
  );
}

export default Form