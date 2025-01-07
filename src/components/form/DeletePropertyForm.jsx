'use client'

import { deleteProperty } from "@/lib/actions";

const DeletePropertyForm = ({ id }) => {
  const propertyId = JSON.parse(id)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deleteProperty(propertyId);
      }}
    >
      <button
        className="
    bg-red-600 hover:bg-red-700 text-white font-bold py-2  px-4 rounded shadow-md hover:shadow-lg 
 focus:outline-none focus:ring-2  focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300
  "
      >
        Delete
      </button>
    </form>
  );
}

export default DeletePropertyForm