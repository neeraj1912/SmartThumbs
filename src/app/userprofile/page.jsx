"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import React, { useState } from "react";
import SidebarLinks from "@/components/sidebarLinks"; // Import the new SidebarLinks component
import Header from "@/components/header";
import {
  Home,
  LayoutDashboard,
  FileText,
  User,
  Wallet,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

const UserProfile = () => {
   const [sidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-[#000000] min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-60 md:hidden text-white"
        aria-label={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className="flex">
      <SidebarLinks />
        {/* Main Content */}
        <div className={"flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950 text-white"}>
        <Header title="Profile"></Header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Profile Card */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/user.png"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-zinc-400">@johndoe</p>
                <button className="mt-4 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-md hover:bg-blue-600/30 transition-colors border border-blue-500/20">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Points Card with Fancy Animation */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-lg shadow-md p-6 flex flex-col justify-center items-center overflow-hidden">
              <h2 className="text-lg font-semibold mb-4">Total Points</h2>
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.75 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span 
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    1500
                  </motion.span>
                  <motion.span 
                    className="text-zinc-400 text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    Total Earned
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Tasks Solved Card */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Tasks Solved</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#2563EB]">Labelling task</span>
                  <span className="text-zinc-300">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#EC4899]">Thumbnail rating</span>
                  <span className="text-zinc-300">6</span>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-700">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Total tasks done</span>
                    <span className="text-xl font-bold">29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Completed Tasks */}
          <div className="bg-zinc-900/70 backdrop-blur-sm rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Recently Completed Tasks</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-800/70">
                    <th className="px-4 py-2 text-left">Task Name</th>
                    <th className="px-4 py-2 text-left">Employer</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Points Earned</th>
                  </tr>
                </thead>
                <tbody className="bg-zinc-900/70">
                  {[
                    { name: "Label Dataset A", employer: "ABC Corp", date: "2024-12-10", points: 200 },
                    { name: "Thumbnail Review", employer: "XYZ Media", date: "2024-12-09", points: 350 },
                    { name: "Data Tagging Task", employer: "LMN Inc", date: "2024-12-08", points: 500 },
                    { name: "Image Classification", employer: "Tech Innovators", date: "2024-12-07", points: 400 },
                    { name: "Text Summarization", employer: "Content Co.", date: "2024-12-06", points: 550 },
                    { name: "Sentiment Analysis", employer: "Social Media Giants", date: "2024-12-05", points: 250 },
                    { name: "Object Detection", employer: "VisionTech", date: "2024-12-04", points: 600 },
                    { name: "Audio Transcription", employer: "HearIt", date: "2024-12-03", points: 300 },
                    { name: "Spam Filtering", employer: "SecureMail", date: "2024-12-02", points: 450 },
                    { name: "Topic Modeling", employer: "ResearchHub", date: "2024-12-01", points: 500 },
                  ].map((task, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-zinc-900/50" : "bg-zinc-900/40"}>
                      <td className="px-4 py-2">{task.name}</td>
                      <td className="px-4 py-2">{task.employer}</td>
                      <td className="px-4 py-2">{task.date}</td>
                      <td className="px-4 py-2">{task.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;