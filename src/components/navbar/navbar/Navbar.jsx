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
  console.log(session)

  return (
    <motion.div
      variants={{ hidden: { y: "-120%" }, visible: { y: 0 } }}
      animate={`${hidden ? "hidden" : "visible"}`}
      transition={{ duration: 0.33, ease: easeInOut }}
      className="flex justify-between items-center py-4 border-b shadow-lg px-10 bg-white sticky top-0 z-50"
    >
      <Link
        href={"/"}
        className="text-3xl font-extrabold text-sky-950 hover:text-[#BC986B] tracking-wide"
      >
        BPM
      </Link>
      <div className="hidden md:flex">
        <NavLinks session={session}/>
      </div>
      {!session?.user ? (
        <Link
          href="/login"
          className="hidden md:block py-2 px-5 bg-black text-white rounded-lg normal-text font-semibold tracking-widest shadow-sm border uppercase hover:opacity-80 duration-300"
        >
          login
        </Link>
      ) : (
          <button
            onClick={() => signOut()}
          className="hidden md:block py-2 px-5 bg-black text-white rounded-lg normal-text font-semibold tracking-widest shadow-sm border uppercase hover:opacity-80 duration-300"
        >
          signout
        </button>
      )}
      <div
        className="md:hidden relative z-50"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <X /> : <Menu />}
      </div>

      <AnimatePresence>
        {menu && (
          <Backdrop
            open={menu}
            onClick={() => setMenu(!menu)}
            className="z-10 w-screen min-h-svh"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-1/2 h-full absolute top-0 right-0 bottom-0 md:hidden bg-white py-20 px-10"
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
