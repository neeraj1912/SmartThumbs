"use client";
import React, { useState } from 'react';
import GreetingMessage from "@/components/GreetingMessage"; // Import the new GreetingMessage component

import { 
  Home, 
  LayoutDashboard, 
  FileText, 
  User, 
  Wallet, 
  Settings, 
  LogOut, 
  ImageIcon, 
  BarChart, 
  Layers, 
  Target, 
  Zap, 
  Users, 
  DollarSign, 
  Award
} from 'lucide-react';

import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";

import Header from "@/components/header";

const DataLabelingDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sidebar links
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
    { href: "/userprofile", label: "Profile", icon: <User className="w-6 h-6" /> },
    { href: "/wallet", label: "Wallet", icon: <Wallet className="w-6 h-6" /> },
    { href: "/settings", label: "Settings", icon: <Settings className="w-6 h-6" /> },
    { href: "/logout", label: "Logout", icon: <LogOut className="w-6 h-6" /> },
  ];

  // Sample dashboard data
  const dashboardData = {
    projectStats: [
      { label: 'Total Projects', value: 42, icon: Layers, color: 'text-blue-400 bg-blue-900/30', trend: '+12%' },
      { label: 'Images Labeled', value: 15678, icon: ImageIcon, color: 'text-green-400 bg-green-900/30', trend: '+25%' },
      { label: 'Pending Tasks', value: 246, icon: BarChart, color: 'text-yellow-400 bg-yellow-900/30', trend: '-5%' },
      { label: 'Total Earnings', value: '$4,562.50', icon: DollarSign, color: 'text-purple-400 bg-purple-900/30', trend: '+18%' }
    ],
    quickWidgets: [
      { title: 'Accuracy Rate', value: '94.3%', icon: Target, color: 'bg-emerald-900/30 text-emerald-400' },
      { title: 'Active Raters', value: '1,245', icon: Users, color: 'bg-cyan-900/30 text-cyan-400' },
      { title: 'Completed Tasks', value: '3,756', icon: Zap, color: 'bg-rose-900/30 text-rose-400' }
    ],
    recentProjects: [
      { id: 1, title: 'E-commerce Product Images', type: 'Thumbnail Rating', progress: 85, status: 'In Progress' },
      { id: 2, title: 'Medical Image Segmentation', type: 'Semantic Labeling', progress: 100, status: 'Completed' },
      { id: 3, title: 'Social Media Content Classification', type: 'Image Labeling', progress: 45, status: 'Pending' }
    ]
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar open={true} animate={true} className="fixed top-0 left-0 h-full z-50 shadow-lg shadow-white">
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

      {/* Main Content */}
      <div className="flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950 text-white">
         {/* Header */}
         <Header title="Dashboard"></Header>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {dashboardData.projectStats.map((stat) => (
          <div 
            key={stat.label} 
            className={`
              ${stat.color} 
              p-4 rounded-lg 
              transform transition-all duration-300 
              hover:-translate-y-2 
              hover:scale-105 
              shadow-lg 
              hover:shadow-xl
            `}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="opacity-50" size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Widgets */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {dashboardData.quickWidgets.map((widget) => (
          <div 
            key={widget.title}
            className={`
              ${widget.color} 
              p-4 rounded-lg 
              transform transition-all duration-300 
              hover:-translate-y-2 
              hover:scale-105 
              shadow-lg 
              hover:shadow-xl
            `}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-zinc-400 text-sm">{widget.title}</p>
                <p className="text-2xl font-bold">{widget.value}</p>
              </div>
              <widget.icon className="opacity-50" size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Project Filters */}
      <div className="flex space-x-2 mb-4">
        {['all', 'thumbnail', 'labeling', 'segmentation'].map((filter) => (
          <button
            key={filter}
            className={`
              px-4 py-2 rounded-full text-sm capitalize
              transition-all duration-300
              ${activeFilter === filter 
                ? 'bg-blue-600 text-white' 
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}
            `}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-zinc-900 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <div className="space-y-3">
          {dashboardData.recentProjects.map((project) => (
            <div 
              key={project.id} 
              className="
                flex justify-between items-center 
                bg-zinc-800 p-4 rounded-md
                transition-all duration-300
                hover:bg-zinc-700
                hover:translate-x-2
              "
            >
              <div className="flex-1">
                <p className="font-medium">{project.title}</p>
                <p className="text-sm text-zinc-400">{project.type}</p>
                <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                  <div 
                    className={`
                      h-2 rounded-full 
                      ${project.status === 'Completed' 
                        ? 'bg-green-500' 
                        : project.status === 'In Progress'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'}
                    `}
                    style={{width: `${project.progress}%`}}
                  ></div>
                </div>
              </div>
              <div 
                className={`
                  ml-4 px-3 py-1 rounded-full text-xs font-medium
                  ${project.status === 'Completed' 
                    ? 'bg-green-900 text-green-300' 
                    : project.status === 'In Progress'
                    ? 'bg-blue-900 text-blue-300'
                    : 'bg-yellow-900 text-yellow-300'}
                `}
              >
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DataLabelingDashboard;