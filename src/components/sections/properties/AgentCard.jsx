import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { getAgent } from "@/lib/fetchData";



const AgentCard = async ({ agentId }) => {
  const agentDetail = await getAgent(agentId);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 p-7 bg-white irounded-sm border mt-10 max-w-3xl">
      <div className="relative min-h-96 md:min-h-full md:flex-1">
        <Image
          src={agentDetail.image}
          alt="Agent Profile"
          fill
        />
      </div>
      <div className="relative h-full flex-1 space-y-3">
        <div className=" pb-4 border-b">
          <h1 className="body_text tracking-wide capitalize font-semibold text-center">
            {agentDetail.name}
          </h1>
          <p className="small_text text-center">{agentDetail.role}</p>
        </div>
        <div className="pb-4 border-b flex justify-center items-center gap-2 group cursor-pointer ">
          <Phone
            size={15}
            color="#BC986B"
          />
          <a
            href={`tel:${agentDetail.phone}`}
            className="small_text tracking-wider group-hover:text-[#BC986B] duration-300 w-full cursor-pointer"
          >
            {agentDetail.phone}
          </a>
        </div>
        <div className="pb-4 border-b flex gap-2 group cursor-pointer justify-center items-center">
          <Mail
            size={15}
            color="#BC986B"
          />
          <a
            href={`mailto:${agentDetail.email}`}
            className="small_text tracking-wider group-hover:text-[#BC986B] duration-300 w-full cursor-pointer"
          >
            {agentDetail.email}
          </a>
        </div>
        <p className="small_text tracking-wide text-slate-400">
          Being a full time MyHome broker for over 15 years has given
          <span className="capitalize"> {agentDetail.name} </span>
          the opportunity to work with the most wonderful clients.
        </p>
        <a
          href={`tel:${agentDetail.phone}`}
          className="p-3 px-5 inline-block rounded-md text-white uppercase bg-[#BC986B] shadow-md border hover:bg-amber-400 duration-300"
        >get in touch</a>
      </div>
    </div>
  );
};

export default AgentCard;
