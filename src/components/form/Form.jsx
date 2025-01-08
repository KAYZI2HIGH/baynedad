"use client";

import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";

// import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Form = () => {
  const [submittedSuccess, setSubmittedSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const submit = async (data) => {
    try {
      await emailjs.send(
        "service_5egwshk",
        "template_5wuoq8t",
        {
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          to_name: `Baynedad Property Managers`,
          message: data.message,
        },
        "PygAlWN-oIpcuTQzU"
      );
      setSubmittedSuccess(true);
      setTimeout(() => {
        setSubmittedSuccess("");
      }, 3000);
      reset();
    } catch (error) {
      console.log(error);
      setSubmittedSuccess(false);
    }
  };

  // const notifySuccess = () =>
  //   toast(
  //     <div className="text-center p-4 bg-green-200 text-green-700 rounded-lg flex items-center justify-center space-x-4">
  //       <CheckCircle className="text-2xl" />
  //       <p className="text-sm">
  //         We’re excited to hear from you! Stay tuned for our response.!
  //       </p>
  //     </div>
  //   );
  // const notifyFailed = () =>
  //   toast(
  //     <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
  //       <XCircle className="text-2xl" />
  //       <p className="text-sm">
  //         An error occurred while submitting the form. Please try again later.
  //       </p>
  //     </div>
  //   );

  // if (submittedSuccess === true) notifySuccess();
  // else if (submittedSuccess === false) notifyFailed();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full h-fit md:max-w-[40%] bg-[#31323C] text-white p-10"
    >
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={true}
      />
      <h1 className="section_title tracking-wider font-semibold">
        Request a Showing
      </h1>
      <div className="space-y-4 mt-7 text-black">
        <input
          name="name"
          {...register("name", {
            required: "This field is required.",
          })}
          type="text"
          placeholder="Your Name"
          className="p-4 text-sm font-semibold tracking-wider w-full rounded-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.name.message}
          </p>
        )}
        <input
          name="email"
          {...register("email", {
            required: "This field is required.",
          })}
          type="text"
          placeholder="E-mail"
          className="p-4 text-sm font-semibold tracking-wider w-full rounded-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.email.message}
          </p>
        )}
        <input
          name="phone"
          {...register("phone", {
            required: "This field is required.",
          })}
          type="text"
          placeholder="Phone"
          className="p-4 text-sm font-semibold tracking-wider w-full rounded-sm"
        />
        {errors.phone && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.phone.message}
          </p>
        )}
        <textarea
          name="message"
          {...register("message", {
            required: "This field is required.",
          })}
          placeholder="Message"
          className="p-4 text-sm font-semibold tracking-wider w-full h-36 rounded-sm"
        />
        {errors.message && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.message.message}
          </p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          className="w-full bg-[#BC986B] py-3 uppercase normal_text text-white  rounded hover:bg-amber-400 hover:text-black duration-300 flex justify-center items-center gap-2"
        >
          {!isSubmitting ? (
            <>send message</>
          ) : (
            <>
              sending...
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
