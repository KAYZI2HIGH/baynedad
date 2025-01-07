"use client";

import { CircularProgress } from "@mui/material";
import {
  CalendarIcon,
  Check,
  CheckCircle,
  MoveRight,
  PhoneCall,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

const ContactPage = () => {
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
          from_name: `${data.firstname} ${data.lastname}`,
          to_name: `Baynedad Property Managers`,
          message: data.message,
        },
        "PygAlWN-oIpcuTQzU"
      );
      reset();
      setSubmittedSuccess(true);
      setTimeout(() => {
        setSubmittedSuccess("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setSubmittedSuccess(false);
    }
  };

  return (
    <div className="w-full py-20 px-10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="px-3 py-1 rounded-full bg-black text-white w-fit">
                  Contact
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left">
                  Get in Touch
                </h4>
                <p className="body_text leading-relaxed tracking-tight text-slate-500 max-w-sm text-left">
                  Building your dream property or managing your facility
                  shouldn't be a hassle. Reach out to us and experience seamless
                  real estate and management solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Reliable Services</p>
                <p className="text-muted-foreground text-sm">
                  We offer dependable services tailored to meet your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Expert Guidance</p>
                <p className="text-muted-foreground text-sm">
                  Our team provides professional advice every step of the way.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customer Satisfaction</p>
                <p className="text-muted-foreground text-sm">
                  Your satisfaction is our top priority, and we deliver with
                  excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center w-full">
            <form
              onSubmit={handleSubmit(submit)}
              className="rounded-md w-full flex flex-col border p-8 gap-4"
            >
              {submittedSuccess === true && (
                <div className="text-center p-4 bg-green-200 text-green-700 rounded-lg flex items-center justify-center space-x-4">
                  <CheckCircle className="text-2xl" />
                  <p className="normal_text font-semibold">
                    We’re excited to hear from you! Stay tuned for our
                    response.!
                  </p>
                </div>
              )}
              {submittedSuccess === false && (
                <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
                  <XCircle className="text-2xl" />
                  <p className="normal_text font-semibold">
                    An error occurred while submitting the form. Please try
                    again later.
                  </p>
                </div>
              )}
              <p className="section_title font-medium tracking-wide">
                Book a meeting
              </p>

              <div className="grid w-full items-center gap-1">
                <label htmlFor="firstname">First name</label>
                <input
                  className="w-full py-2 px-6 rounded bg-transparent border"
                  id="firstname"
                  name="firstname"
                  {...register("firstname", {
                    required: "This field is required.",
                  })}
                  type="text"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-md tracking-wider">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1">
                <label htmlFor="lastname">Last name</label>
                <input
                  className="w-full py-2 px-6 rounded bg-transparent border"
                  id="lastname"
                  name="lastname"
                  {...register("lastname", {
                    required: "This field is required.",
                  })}
                  type="text"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-md tracking-wider">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-full p-4 rounded bg-transparent border h-32"
                  id="message"
                  name="message"
                  {...register("message", {
                    required: "This field is required.",
                  })}
                  type="text"
                />
                {errors.message && (
                  <p className="text-red-500 text-md tracking-wider">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                disabled={isSubmitting}
                className={`flex rounded-md justify-center items-center gap-4 w-full bg-black text-white py-3 ${
                  isSubmitting && "opacity-50"
                } `}
              >
                {!isSubmitting ? (
                  <>
                    Book the meeting <MoveRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <CircularProgress size="18px" />
                    <p>Sending</p>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
