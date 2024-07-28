"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const MotionLink = motion(Link)

  return (
    <div className="md:hidden">
      <button
        className="flex flex-col gap-1 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-1 bg-primaryDark rounded-sm ${
            isOpen && "rotate-45 bg-primaryLight"
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-primaryDark rounded-sm ease-in-out duration-500 ${
            isOpen && "opacity-0"
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-primaryDark rounded-sm origin-left ease-in-out duration-500 ${
            isOpen && "-rotate-45 bg-primaryLight"
          } `}
        ></div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="absolute left-0 top-0 bottom-0 right-0 w-full bg-primaryDark flex flex-col justify-center gap-12 sm:gap-20 font-medium text-5xl sm:text-6xl -z-[1] text-primaryLight"
          >
            <MotionLink
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              href={"/"}
              className="uppercase pl-24 sm:pl-52 flex items-end gap-2"
            >
              <span className="text-4xl">01.</span>
              <span>Home</span>
            </MotionLink>
            <MotionLink
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              href={"/"}
              className="uppercase pl-40 sm:pl-72"
            >
              <span className="text-4xl">02.</span>
              <span> About me</span>
            </MotionLink>
            <MotionLink
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
              href={"/"}
              className="uppercase pl-40 sm:pl-72"
            >
              <span className="text-4xl">03.</span>
              <span>Contact</span>
            </MotionLink>
            <MotionLink
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1 }}
              href={"/"}
              className="uppercase pl-24 sm:pl-52"
            >
              <span className="text-4xl">04.</span>
              <span>Blog</span>
            </MotionLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
