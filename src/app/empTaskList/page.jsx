"use client";

import React, { useState } from "react";
import {
  Search,
  Clock,
  Bitcoin,
  Home,
  LayoutDashboard,
  FileText,
  User,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";


// Mock data for tasks with crypto payment amounts
const initialTasks = [
  {
    id: 1,
    type: "Data Labelling",
    complexity: "Simple",
    contentCategory: "Technology",
    title: "Tech Product Image Labeling",
    description: "Label images of various tech products",
    paymentAmount: 0.00012,
    estimatedTime: "30 mins",
    currency: "BTC",
  },
  {
    id: 2,
    type: "Thumbnail Rating",
    complexity: "Moderate",
    contentCategory: "Sports",
    title: "Sports Video Thumbnail Evaluation",
    description: "Rate thumbnails for sports video content",
    paymentAmount: 0.0023,
    estimatedTime: "45 mins",
    currency: "BTC",
  },
  {
    id: 3,
    type: "Data Labelling",
    complexity: "Complex",
    contentCategory: "Education",
    title: "Educational Content Semantic Labeling",
    description: "Perform detailed semantic labeling of educational texts",
    paymentAmount: 0.00035,
    estimatedTime: "1.5 hours",
    currency: "BTC",
  },
  {
    id: 4,
    type: "Thumbnail Rating",
    complexity: "Complex",
    contentCategory: "Education",
    title: "Educational Content Semantic Labeling",
    description: "Perform detailed semantic labeling of educational texts",
    paymentAmount: 0.00069,
    estimatedTime: "6.9 hours",
    currency: "BTC",
  },
];

// Sidebar links
const sidebarLinks = [
  { href: "/internalhome", label: "Home", icon: <Home className="w-6 h-6" /> },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
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
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings className="w-6 h-6" />,
  },
  { href: "/logout", label: "Logout", icon: <LogOut className="w-6 h-6" /> },
];

const TaskListPage = () => {
  // Search and Sort states
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("paymentAmount");
  const [selectedTaskType, setSelectedTaskType] = useState("");
  const [selectedComplexity, setSelectedComplexity] = useState("");

  // Filter and sort tasks
  const filteredTasks = initialTasks
    .filter(
      (task) =>
        (selectedTaskType === "" || task.type === selectedTaskType) &&
        (selectedComplexity === "" || task.complexity === selectedComplexity) &&
        (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "paymentAmount") return b.paymentAmount - a.paymentAmount;
      if (sortBy === "estimatedTime") {
        const parseTime = (time) => {
          if (time.includes("hours")) return parseFloat(time) * 60;
          return parseFloat(time);
        };
        return parseTime(b.estimatedTime) - parseTime(a.estimatedTime);
      }
      return 0;
    });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        open={true}
        animate={true}
        className="fixed top-0 left-0 h-full z-50 shadow-lg shadow-white"
      >
        <SidebarBody>
          {/* Logo */}
          <div className="flex justify-center py-4">
            <img src="/logo.png" alt="Logo" className="w-20 h-auto mb-8 mt-5" />
          </div>

          {/* Sidebar Links */}
          {sidebarLinks.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      {/* Right Side - Tasks List */}
      <div className="flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950">
        <div className="welcome-message px-4">
          <h2 className="text-4xl font-bold text-white mt-3 mb-1">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-700 bg-clip-text text-transparent mb-2">
              Micro Task Vault
            </span>
          </h2>
          <div class=" text-5xl font-semibold text-center text-slate-200">Task List
  
</div>

        </div>
        <hr class="w-2/3 h-1 mx-auto my-1 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-blue-500/30 border-0 rounded md:my-7 dark:bg-gradient-to-r dark:from-purple-700/30 dark:via-indigo-700/30 dark:to-blue-700/30"></hr>

        {/* Search and Filter Section */}
        <div className="flex mb-4 space-x-4 items-center">
          {/* Search Input */}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full p-2 pl-8 border-none rounded bg-zinc-800 text-zinc-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-3 text-zinc-300" size={20} />
          </div>

          {/* Task Type Filter */}
          <select
            className="p-2 border-none rounded bg-zinc-800 text-zinc-300"
            value={selectedTaskType}
            onChange={(e) => setSelectedTaskType(e.target.value)}
          >
            <option value="">All Task Types</option>
            <option value="Data Labelling">Data Labelling</option>
            <option value="Thumbnail Rating">Thumbnail Rating</option>
          </select>

          {/* Complexity Filter */}
          <select
            className="p-2 border-none rounded bg-zinc-800 text-zinc-300"
            value={selectedComplexity}
            onChange={(e) => setSelectedComplexity(e.target.value)}
          >
            <option value="">All Complexities</option>
            <option value="Simple">Simple</option>
            <option value="Moderate">Moderate</option>
            <option value="Complex">Complex</option>
          </select>

          {/* Sort Dropdown */}
          <select
            className="p-2 border-none rounded bg-zinc-800 text-zinc-300"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="paymentAmount">Sort by Payment</option>
            <option value="estimatedTime">Sort by Time</option>
          </select>
        </div>

        {/* Tasks List */}
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 mb-4 rounded bg-zinc-800 transition-shadow hover:shadow-[0_4px_6px_rgba(138,57,252,0.2),_0_4px_15px_rgba(139,92,246,0.3),_0_4px_25px_rgba(59,130,246,0.4)]"

          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-white">{task.title}</h3>
              <div className="flex items-center space-x-2">
                <Bitcoin size={16} className="text-yellow-500" />
                <span className="font-bold text-yellow-500">
                  {task.paymentAmount} BTC
                </span>
              </div>
            </div>
            <div className="text-sm text-zinc-400 mb-2">{task.description}</div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1 text-green-600">
                  <Clock size={16} />
                  <span>{task.estimatedTime}</span>
                </div>
                <div
                  className={`${
                    task.type === "Data Labelling"
                      ? "text-blue-500"
                      : task.type === "Thumbnail Rating"
                      ? "text-purple-600"
                      : "text-pink-600"
                  }`}
                >
                  {task.type}
                </div>
              </div>
              <button class="px-5 py-3 text-xs uppercase tracking-widest font-medium text-slate-300 bg-gradient-to-r from-purple-800 to-blue-800 border-none rounded-full shadow-lg transition-all duration-300 ease-in-out outline-none cursor-pointer hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-xl hover:-translate-y-2 active:-translate-y-0.5">
                Do Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskListPage;
