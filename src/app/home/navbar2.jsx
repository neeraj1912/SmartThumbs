"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="relative w-full bg-zinc-950 h-28 px-6 ">
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" className="w-14 h-auto" />
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Micro Task <span className="text-purple-500">Vault</span>
            </h2>
            <p className="text-zinc-400 text-sm ">
              Discover, Complete, Earn Crypto
            </p>
          </div>
        </div>
        {/* <div className="flex-1 flex justify-center"> */}
        <FloatingNav
          navItems={navItems}
          className="bg-transparent px-20 rounded-lg shadow-lg text-white border border-slate-800"
        />
        {/* </div> */}

        <button className="text-white text-lg font-semibold hidden sm:flex bg-gradient-to-r from-purple-500 via-violet-500 to-blue-800 px-5 py-2 rounded-lg transition-all duration-300 hover:from-blue-600 hover:via-violet-500 hover:to-purple-600">
          <Link href="/emplogin">Sign In</Link>
        </button>
      </div>
    </div>
  );
}
