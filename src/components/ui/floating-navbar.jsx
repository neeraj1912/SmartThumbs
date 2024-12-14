"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div className="h-full bg-white"> {/* Increased height of the navbar */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.3, // Slightly longer duration for smoother transition
            }}
            className={cn(
              "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_4px_5px_-1px_rgba(0,0,0,0.2),0px_2px_0px_0px_rgba(25,28,33,0.03),0px_1px_0px_2px_rgba(25,28,33,0.1)] z-[5000] pr-3 pl-10 py-3 items-center justify-center space-x-6", // Increased padding for larger size
              className
            )}
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-400 items-center flex space-x-2 text-lg text-white dark:hover:text-neutral-300 hover:text-slate-500 font-medium transition-colors duration-200 ease-in-out" // Increased font size, color change on hover, smoother color transition
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
