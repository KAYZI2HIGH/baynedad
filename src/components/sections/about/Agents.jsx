import { agents } from "@/lib/constants";
import Image from "next/image";

const Agents = () => {
  return (
    <div className="flex flex-col gap-20 px-10 pt-20 w-full max-w-[1100px] pb-10 mx-auto">
      <h1 className="header tracking-wider font-semibold under w-fit">
        Our Agents
      </h1>
      <div className="grid grid-cols-customs w-full gap-10">
        {agents.map((agent, index) => (
          <div
            className="flex flex-col gap-5 h-72 shadow-md pb-5 cursor-pointer group hover:-translate-y-4 transition-all duration-300 rounded-md overflow-hidden"
            key={index}
          >
            <div className="w-full h-[70%] relative">
              <Image
                src={agent.profileImg}
                alt="profile iamge"
                fill
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-500 body_text font-medium tracking-wider text-center capitalize group-hover:text-[#BC986B] transition-all duration-300">
                {agent.name}
              </h1>
              <p className="small_text capitalize text-gray-400 text-center">
                {agent.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
