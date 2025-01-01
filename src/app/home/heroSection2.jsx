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
        className="px-4 md:text-4xl lg:text-5xl font-bold text-slate-490 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        "Your Gateway to Microjobs"{" "}
        <br />
        <Highlight className="text-zinc-950 dark:text-white">
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
        className="mt-8 text-center relative"  // Reduced margin-top for less space
      >
        {/* Get Started Button - Centered with Text */}
        <div className="flex justify-center items-center space-x-4 pt-5">  {/* Reduced space-x-4 to space-x-2 */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">
              Start Your Crypto Earning Journey
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors shadow-lg"
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
        </div>
      </motion.div>
    </HeroHighlight>
  );
}
