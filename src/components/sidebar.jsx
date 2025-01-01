"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  return (
    <SidebarContext.Provider value={{ open: true, animate: true }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children }) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

export const DesktopSidebar = ({ className, children, ...props }) => {
  return (
    <motion.div
      className={cn(
        'h-full px-4 py-4 fixed top-0 left-0 z-50 bg-black w-[300px] flex-shrink-0', // Always open sidebar with a fixed width
        className
      )}
      animate={{ width: "300px" }} // Remove collapse logic
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-slate-950 w-full',
        className
      )}
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
        <IconMenu2 className="text-white" size={32} />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            'fixed h-full w-full inset-0 bg-slate-950 p-10 z-[100] flex flex-col justify-between',
            className
          )}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({ link, className, ...props }) => {
  const { open } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn("flex items-center justify-start gap-5 group/sidebar py-3 text-white", className)}
      {...props}
    >
      {React.cloneElement(link.icon, { className: "w-8 h-8" })} {/* Adjusted icon size */}
      <motion.span
        animate={{
          display: open ? "inline-block" : "none",
          opacity: open ? 1 : 0,
        }}
        className="text-white text-lg group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0" // Adjusted label font size
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
