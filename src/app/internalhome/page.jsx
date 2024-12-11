"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import { Home, LayoutDashboard, FileText, User, Wallet, Settings, LogOut } from "lucide-react";
import GreetingMessage from "@/components/GreetingMessage"; // Import the new GreetingMessage component
import { WobbleCard } from "@/components/wobble-card"; // Import WobbleCard

const InternalHome = () => {
  const [sidebarOpen] = useState(true);

  const sidebarLinks = [
    { href: "/internalhome", label: "Home", icon: <Home className="w-6 h-6" /> },
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-6 h-6" /> },
    {
      href: "/empTaskList",
      label: "Tasks",
      icon: <FileText className="w-6 h-6" />,
      children: [
        { href: "/tasks/data-labeling", label: "Data Labeling" },
        { href: "/tasks/thumbnail-rating", label: "Thumbnail Rating" },
      ],
    },
    { href: "/profile", label: "Profile", icon: <User className="w-6 h-6" /> },
    { href: "/wallet", label: "Wallet", icon: <Wallet className="w-6 h-6" /> },
    { href: "/settings", label: "Settings", icon: <Settings className="w-6 h-6" /> },
    { href: "/logout", label: "Logout", icon: <LogOut className="w-6 h-6" /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar (always open) */}
      <Sidebar
        open={sidebarOpen}
        animate={true}  // Disable animation for collapsing
        className="fixed top-0 left-0 h-full z-50 shadow-lg shadow-white"  // Added shadow to the sidebar
      >
        <SidebarBody>
          {/* Logo */}
          <div className="flex justify-center py-4">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-20 h-auto mb-8 mt-5"  // Fixed logo size
            />
          </div>
          
          {/* Sidebar Links */}
          {sidebarLinks.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto ml-[300px] bg-zinc-950">
        <GreetingMessage user="John Doe" /> {/* Pass the user prop to the GreetingMessage component */}

        {/* Wobble Cards */}
        <div className="task-cards flex space-x-4 p-4">
          {/* Card 1: Data Labelling */}
          <div className="flex flex-col space-y-6">
  {/* Card 1: Data Labelling */}
  
  {/* Card 1: Data Labelling */}
  <WobbleCard containerClassName="flex-1 bg-zinc-950 rounded-lg shadow-md relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-400 to-purple-600 opacity-40 blur-xl"></div>
    <h2 className="text-2xl font-bold mb-4 text-purple-500 relative">Thumbnail Rater</h2>
    <p className="text-slate-300 mb-6 relative">
      Evaluate and rate image thumbnails based on visual appeal, 
      relevance, and potential engagement to improve content selection.
    </p>
    <div className="flex space-x-4 relative">
      <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
        Upload Task
      </button>
      <button className="flex items-center bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
        Do Task
      </button>
    </div>
  </WobbleCard>

  

  {/* Card 2: Thumbnail Rater */}
  <WobbleCard containerClassName="flex-1 bg-zinc-950 rounded-lg shadow-md relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400 to-blue-600 opacity-40 blur-xl"></div>
    <h2 className="text-2xl font-bold mb-4 text-blue-500 relative">Data Labelling</h2>
    <p className="text-slate-300 mb-6 relative">
      Assist in organizing and categorizing data sets by adding precise labels 
      to improve machine learning model accuracy and training efficiency.
    </p>
    <div className="flex space-x-4 relative">
      <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Upload Task
      </button>
      <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
        Do Task
      </button>
    </div>
  </WobbleCard>
</div>

</div>


        </div>
      </div>
  );
};

export default InternalHome;
