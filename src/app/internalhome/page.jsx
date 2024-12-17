"use client"
import React, { useState } from "react";
import SidebarLinks from "@/components/sidebarLinks";
import GreetingMessage from "@/components/GreetingMessage";
import { WobbleCard } from "@/components/wobble-card";
import { FaUpload, FaTasks } from "react-icons/fa";
import Header from "@/components/header";
import Link from "next/link"; // Import Link from Next.js

const InternalHome = () => {
  const [sidebarOpen] = useState(false);

  const recentTasks = [
    {
      id: 1,
      taskName: "Thumbnail Rating Task 1",
      status: "Completed",
      date: "2024-12-12",
    },
    {
      id: 2,
      taskName: "Data Labeling Task 3",
      status: "In Progress",
      date: "2024-12-10",
    },
    {
      id: 3,
      taskName: "Thumbnail Rating Task 2",
      status: "Pending",
      date: "2024-12-08",
    },
  ];

  return (
    <div className="flex h-screen">
      <SidebarLinks />

      <div className="flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950 text-white">
        <Header title={<GreetingMessage user="John Doe" />}></Header>

        <div className="task-cards flex space-x-4 p-4">
          {/* Card 1: Thumbnail Rating */}
          <WobbleCard containerClassName="flex-1 bg-gray-900 border-gray-800 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-violet-900/30 blur-xl"></div>
            <h2 className="text-4xl font-bold mb-4 text-violet-400 relative tracking-wide">
              Thumbnail Rater
            </h2>
            <p className="text-slate-200 text-md mb-6 relative leading-relaxed">
              Evaluate and rate image thumbnails based on visual appeal,
              relevance, and potential engagement to improve content selection.
            </p>
            <div className="flex space-x-6 relative">
              <Link href="/thumbnailupload">
                <button className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-800 transition transform hover:scale-105">
                  <FaUpload className="mr-2" /> Upload Task
                </button>
              </Link>
              <Link href="/empTaskList">
                <button className="flex items-center bg-violet-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-800 transition transform hover:scale-105">
                  <FaTasks className="mr-2" /> Do Task
                </button>
              </Link>
            </div>
          </WobbleCard>

          {/* Card 2: Data Labelling */}
          <WobbleCard containerClassName="flex-1 bg-gray-900 border-gray-800 rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/30 blur-xl"></div>
            <h2 className="text-4xl font-bold mb-4 text-blue-400 relative tracking-wide">
              Data Labelling
            </h2>
            <p className="text-slate-200 text-md mb-6 relative leading-relaxed">
              Assist in organizing and categorizing datasets by adding precise
              labels to enhance model accuracy and training efficiency.
            </p>
            <div className="flex space-x-6 relative">
              <Link href="/labeltaskupload">
                <button className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition transform hover:scale-105">
                  <FaUpload className="mr-2" /> Upload Task
                </button>
              </Link>
              <Link href="/empTaskList">
                <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition transform hover:scale-105">
                  <FaTasks className="mr-2" /> Do Task
                </button>
              </Link>
            </div>
          </WobbleCard>
        </div>
      {/* Recent Tasks Section */}
      <div className="recent-tasks mt-8 p-6">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Recently Upload Tasks
          </h3>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className={`flex justify-between items-center 
                bg-zinc-800 p-4 rounded-md
                transition-all duration-300
                hover:bg-zinc-700
                hover:translate-x-2 ${
                  task.status === "Completed"
                    ? "border-l-4 border-green-500"
                    : task.status === "In Progress"
                    ? "border-l-4 border-blue-500"
                    : task.status === "Pending"
                    ? "border-l-4 border-yellow-500"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">
                    {task.status === "Completed" && (
                      <i className="fas fa-check-circle text-green-500"></i>
                    )}
                    {task.status === "In Progress" && (
                      <i className="fas fa-spinner animate-spin text-blue-500"></i>
                    )}
                    {task.status === "Pending" && (
                      <i className="fas fa-hourglass-half text-yellow-500"></i>
                    )}
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-white">
                      {task.taskName}
                    </h4>
                    <p className="text-slate-300 font-semibold">
                      Status:{" "}
                      <span
                        className={`text-sm ${
                          task.status === "Completed"
                            ? "text-green-500"
                            : task.status === "In Progress"
                            ? "text-blue-500"
                            : task.status === "Pending"
                            ? "text-yellow-500"
                            : "text-slate-200"
                        }`}
                      >
                        {task.status}
                      </span>
                    </p>
                    <p className="text-sm text-slate-400">Date: {task.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalHome;