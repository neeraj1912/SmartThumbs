"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

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
      icon: (
        <IconMessage className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full bg-black h-24  border-b border-slate-800">
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-16 w-30 object-cover"
          />
        </div>
        {/* <div className="flex-1 flex justify-center"> */}
          <FloatingNav
            navItems={navItems}
            className="bg-black p-2 rounded-lg shadow-lg text-white border border-slate-700"
          />
        {/* </div> */}
        <button className="hidden sm:flex bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Login/Register
        </button>
      </div>
    </div>
  );
}