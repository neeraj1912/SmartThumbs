"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarLinks = [
    { href: "/", label: "Home", icon: <Home className="w-6 h-6" /> },
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-6 h-6" /> },
    {
      href: "/tasks",
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
        <Sidebar
          open={sidebarOpen}
          animate={true}
          className={`fixed top-0 left-0 h-full z-50 shadow-lg shadow-white 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 transition-transform duration-300`}
        >
          <SidebarBody>
            {/* Logo */}
            <div className="flex justify-center py-4">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={80}
                height={40}
                className="mb-8 mt-5"
              />
            </div>
            {/* Sidebar Links */}
            {sidebarLinks.map((link, index) => (
              <SidebarLink key={index} link={link} />
            ))}
          </SidebarBody>
        </Sidebar>

        {/* Main Content */}
        <div className={`flex-grow min-h-screen bg-[#000000] text-white 
          ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'} transition-all duration-300 p-8`}>
          <div className="flex items-center mb-6 ml-9">
            <h1 className="text-3xl font-bold">Welcome back, John Doe</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Profile Card */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/user.png"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-400">@johndoe</p>
                <button className="mt-4 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-md hover:bg-blue-600/30 transition-colors border border-blue-500/20">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Points Card with Fancy Animation */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md p-6 flex flex-col justify-center items-center overflow-hidden">
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
                    className="text-gray-400 text-sm mt-1"
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
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Tasks Solved</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#2563EB]">Labelling task</span>
                  <span className="text-gray-300">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#EC4899]">Thumbnail rating</span>
                  <span className="text-gray-300">6</span>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total tasks done</span>
                    <span className="text-xl font-bold">29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Completed Tasks */}
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Recently Completed Tasks</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800/70">
                    <th className="px-4 py-2 text-left">Task Name</th>
                    <th className="px-4 py-2 text-left">Employer</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Points Earned</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900/70">
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
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-900/50" : "bg-gray-900/40"}>
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