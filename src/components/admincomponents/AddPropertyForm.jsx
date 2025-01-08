"use client";

import { addPropertyAction } from "@/lib/actions";
import { CircularProgress } from "@mui/material";
import {  CheckCircle, XCircle } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddPropertyForm = ({ session }) => {
  const [serverMessage, setServerMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("propertyName", data.propertyName);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("price", data.price);
      formData.append("propertyType", data.propertyType);
      formData.append("agentId", session.user.id);

       if (data.images && data.images.length > 0) {
      for (let i = 0; i < data.images.length; i++) {
        formData.append("images", data.images[i]);
      }
    }

    // Handle Features Array
    if (data.features && data.features.length > 0) {
      data.features.map((feature) => {
        formData.append("features", feature);
      });
    }
      const res = await addPropertyAction(formData);
      if (res.error) setServerMessage({ type: "error", message: res.error });
      setServerMessage({ type: "success", message: res.success });

      reset();
      revalidatePath("/properties");
      revalidatePath("/addproperty");
    } catch (error) {
      console.log(error);
      console.log("Something went wrong when submitting new property to DB.");
    }
  };


  const validateInput = (value) => {
    // Check if the value does not contain ₦ symbol or 'per'
    if (!value.includes("₦") && !value.includes("₦")) {
      return "The input should contain the Naira symbol (₦) or (#).";
    }
    if (
      !value.toLowerCase().includes("per") &&
      !value.toLowerCase().includes("one-off")
    ) {
      return "Please specify price duration using the word 'per or 'one-off'.";
    }
    return true; // If validation passes
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md w-full flex flex-col border p-8 gap-4"
    >
      <p className="section_title font-medium tracking-wide">Add a Property</p>

      {serverMessage?.type === "error" && (
        <div className="text-center p-4 bg-red-200 text-red-700 rounded-lg flex items-center justify-center space-x-4">
          <XCircle className="text-2xl" />
          <p className="normal_text font-semibold">{serverMessage.message}</p>
        </div>
      )}
      {serverMessage?.type === "success" && (
        <div className="text-center p-4 bg-green-200 text-green-700 rounded-lg flex items-center justify-center space-x-4">
          <CheckCircle className="text-2xl" />
          <p className="normal_text font-semibold">{serverMessage.message}</p>
        </div>
      )}

      {/* Property Name */}
      <div className="grid w-full items-center gap-1">
        <label htmlFor="propertyName">Property Name</label>
        <input
          className="w-full py-2 px-6 rounded bg-transparent border"
          id="propertyName"
          name="propertyName"
          {...register("propertyName", { required: "This field is required." })}
          type="text"
          placeholder="e.g 3 Bedroom Flats"
        />
        {errors.propertyName && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.propertyName.message}
          </p>
        )}
      </div>
      <input
        type="hidden"
        id="agentId"
        name="agentId"
        {...register("agentId")}
        value={session.user.id}
      />
      {/* Description */}
      <div className="grid w-full items-center gap-1">
        <label htmlFor="description">Description</label>
        <textarea
          className="w-full p-4 rounded bg-transparent border h-32"
          id="description"
          name="description"
          {...register("description", { required: "This field is required." })}
          placeholder="e.g Spacious and Modern 3-Bedroom Flat for Comfortable Living. Discover the perfect blend of style, comfort, and functionality in this beautifully..."
        />
        {errors.description && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div className="grid w-full items-center gap-1">
        <label htmlFor="location">Location</label>
        <input
          className="w-full py-2 px-6 rounded bg-transparent border"
          id="location"
          name="location"
          {...register("location", { required: "This field is required." })}
          type="text"
          placeholder="Lekki, Ajay"
        />
        {errors.location && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.location.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="grid w-full items-center gap-1">
        <label htmlFor="price">Price</label>
        <input
          className="w-full py-2 px-6 rounded bg-transparent border"
          id="price"
          name="price"
          {...register("price", {
            required: "This field is required.",
            validate: validateInput,
          })}
          type="text"
          placeholder="e.g ₦1,000,000 per anuum/year"
        />
        {errors.price && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.price.message}
          </p>
        )}
      </div>

      {/* Property Type */}
      <div className="grid w-full items-center gap-1">
        <label htmlFor="propertyType">Property Type</label>
        <select
          className="w-full py-2 px-6 rounded bg-transparent border"
          id="propertyType"
          name="propertyType"
          {...register("propertyType", { required: "This field is required." })}
        >
          <option value="">Select</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>
        {errors.propertyType && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.propertyType.message}
          </p>
        )}
      </div>

      <div className="grid w-full items-center gap-2 mb-4">
        <label
          htmlFor="features"
          className="font-medium"
        >
          Features
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Parking",
            "Swimming Pool",
            "Gym",
            "Garden",
            "Security",
            "Wi-Fi",
            "Air Conditioning",
            "Elevator",
            "Furnished",
            "Balcony",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                id={feature}
                name="features"
                value={feature}
                {...register("features")}
                className="form-checkbox h-4 w-4 text-black"
              />
              <label
                htmlFor={feature}
                className="text-sm whitespace-nowrap"
              >
                {feature}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div className="grid w-full items-center gap-1">
        <label
          htmlFor="image"
          className="font-medium"
        >
          Upload Property Image
        </label>
        <input
          type="file"
          id="image"
          name="images"
          multiple // Allow multiple files
          accept="image/*"
          {...register("images", {
            required: "Please upload an image.",
            validate: (value) => {
              if (!value || value.length === 0) return "No file selected.";
              const file = value[0];
              const validTypes = ["image/jpeg", "image/png", "image/webp"];
              if (!validTypes.includes(file.type)) {
                return "Only JPEG, PNG, or WebP images are allowed.";
              }
              if (file.size > 5 * 1024 * 1024) {
                // 5MB limit
                return "Image size should not exceed 5MB.";
              }
              return true;
            },
          })}
          className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-700"
        />
        {errors.image && (
          <p className="text-red-500 text-md tracking-wider">
            {errors.image.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={isSubmitting}
        className={`flex rounded-md justify-center items-center gap-4 w-full bg-black text-white py-3 ${
          isSubmitting && "opacity-50"
        }`}
      >
        {!isSubmitting ? (
          <>Add Property</>
        ) : (
          <>
            <CircularProgress size="18px" />
            <p>Sending</p>
          </>
        )}
      </button>
    </form>
  );
};

export default AddPropertyForm;
