import { features1 } from "@/lib/constants";
import { features2 } from "@/lib/constants";


const Features = () => {
  return (
    <section className="mb-20">
      <section className="flex gap-5 mx-auto overflow-scroll max-w-full bg-slate-200 p-5 scroll_hidden">
        {features1.map((feature, index) => (
          <div
            key={index}
            className="w-72 flex flex-col justify-center items-center relative p-6 hover:bg-white rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-10 cursor-pointer"
          >
            {feature.icon}
            <p className="text-sm text-gray-400 capitalize">{feature.title}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 flex flex-col lg:flex-row gap-10 justify-center items-center">
        {features2.map((feature, index) => (
          <div
            className="relative group"
            key={index}
          >
            <div className="absolute opacity-0 group w-[320px] h-[270px] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 right-0  border-4 border-[#BC986B] rounded-xl border-opacity-100 hover:p-0 flex justify-center items-center group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:bottom-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300"></div>
            <div>
              <div className="flex flex-col gap-4 border-4 p-5 max-w-72 rounded-xl">
                <div className="relative w-fit">
                  <div className="absolute opacity-0 group size-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-0  border-4  border-[#BC986B] border-opacity-100 hover:p-0 flex justify-center items-center group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:bottom-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:size-16 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="size-16 rounded-full flex items-center justify-center border-4">
                    {feature.icon}
                  </div>
                </div>

                <h1 className="body_text font-semibold tracking-wide capitalize group-hover:text-[#BC986B] transition-all duration-300">
                  {feature.title}
                </h1>

                <p className="text-sm md:text-base lg:text-md font-lighter text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Features;
