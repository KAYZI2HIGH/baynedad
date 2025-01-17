"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./navlinks/navlinks";
import Link from "next/link";
import { Backdrop } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { easeInOut } from "motion";
import { signOut } from "next-auth/react";

const Navbar = ({ session }) => {
  const [menu, setMenu] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.div
      variants={{ hidden: { y: "-120%" }, visible: { y: 0 } }}
      animate={`${hidden ? "hidden" : "visible"}`}
      transition={{ duration: 0.33, ease: easeInOut }}
      className="flex justify-between items-center py-4 border-b shadow-lg px-10 bg-white sticky top-0 z-50"
    >
      <div className="flex items-baseline gap-2 justify-center">
        <div
          className="md:hidden relative z-50"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </div>
        <Link
          href={"/"}
          className="text-3xl font-extrabold text-sky-950 hover:text-[#BC986B] tracking-wide"
        >
          BPM
        </Link>
      </div>
      <div className="hidden md:flex">
        <NavLinks session={session} />
      </div>
      {session?.user ? (
        <button
          onClick={() => signOut()}
          className="border-2 border-gray-600 text-black py-2 px-6 rounded-md hover:bg-gray-600 hover:text-white hover:shadow-md active:scale-95 transition-all duration-200 uppercase normal_text tracking-wide"
        >
          sign out
        </button>
      ) : (
        <Link
          href={"/login"}
          className="bg-gray-600 text-white uppercase tracking-wide py-2 px-6 rounded-md shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-95 transition-all duration-200 normal_text"
        >
          login
        </Link>
      )}

      <AnimatePresence>
        {menu && (
          <Backdrop
            open={menu}
            onClick={() => setMenu(!menu)}
            className="z-10 w-screen min-h-svh"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-1/2 h-full absolute top-0 left-0 bottom-0 md:hidden bg-white py-20 px-10"
            >
              {
                <NavLinks
                  mobile={true}
                  setMenu={setMenu}
                  session={session}
                />
              }
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
