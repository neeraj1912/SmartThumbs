"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      {/* Main Hero Content */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-slate-490 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        "Your Gateway to Microjobs"{" "}
        <Highlight className="text-black dark:text-white">
          <br />
          Label, Rate & Earn Crypto Now!
        </Highlight>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mt-20 text-center relative"
      >
        <p className="text-xl font-semibold text-white ">
          Start Your Crypto Earning Journey
        </p>

        {/* Get Started Button - Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 mr-4 mb-[-20px]">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5-5 5M18 12H6"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </HeroHighlight>
  );
}
