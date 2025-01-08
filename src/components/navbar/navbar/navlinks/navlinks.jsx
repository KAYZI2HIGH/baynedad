import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { navLinks } from "@/lib/constants";
import { easeInOut } from "motion";
import { signOut } from "next-auth/react";

const NavLinks = ({ mobile, setMenu, session }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className={`flex gap-10 ${mobile && "flex-col"}`}>
      {navLinks.map((link, index) => {
        if (link.title === "add property" && !session?.user?.isAdmin) {
          return;
        }
        return (
          <Link
            href={link.path}
            key={index}
            className="text-sm font-normal text-black hover:text-[#BC986B] uppercase tracking-wide cursor-pointer overflow-hidden w-fit"
          >
            {link.title}
            <AnimatePresence>
              <motion.div
                variants={{ hidden: { x: "-120%" }, visible: { x: 0 } }}
                animate={`${pathName !== link.path ? "hidden" : "visible"}`}
                transition={{ duration: 0.4, ease: easeInOut }}
                className="w-[70%] h-[3px] bg-[#BC986B] rounded-sm"
              ></motion.div>
            </AnimatePresence>
          </Link>
        );
      })}
      
    </div>
  );
};

export default NavLinks;
