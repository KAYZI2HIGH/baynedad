'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"

const BackButton = () => {

  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex justify-center items-center w-fit  gap-1 text-sky-950 bg-[#f4f4f5] p-3 rounded-lg hover:bg-gray-200 transition-all duration-300 tracking-wide"
    >
      <ArrowLeft
        size={18}
        opacity={0.7}
        fontWeight={100}
      />{" "}
      Back
    </button>
  );
}

export default BackButton