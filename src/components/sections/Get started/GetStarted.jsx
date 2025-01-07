'use client';

import { useRouter } from "next/navigation";

const GetStarted = () => {
  const router = useRouter()

  return (
    <div className="bg-gradient-to-b from-[#8C4A2F] to-[#C37A4C] text-center py-16 px-8 rounded-lg shadow-md max-w-[1100px] mx-auto">
      <h2 className="text-white section_title font-bold mb-4">
        Get started with BPM
      </h2>
      <p className="text-white normal_text mb-6 max-w-[400px] mx-auto">
        Subscribe and find super attractive price quotes from us. Find your
        residence soon.
      </p>
      <button
      onClick={() => router.push('/contact')}
      className="bg-white text-[#8C4A2F] font-medium py-2 px-6 rounded-md shadow-md hover:bg-gray-200">
        Get started
      </button>
    </div>
  );
}

export default GetStarted