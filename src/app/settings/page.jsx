"use client"
import React, { useState } from 'react';
import Header from "@/components/header";
import SidebarLinks from "@/components/sidebarLinks"; // Import the new SidebarLinks component
import { 
  Wallet, 
  Settings, 
  Bell, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Zap,
  ChevronRight,
  Home, // Add this import
  LayoutDashboard,
  FileText,
  User,
  LogOut
} from 'lucide-react'; // Import other required icons here


const TaskWalletSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

// Sidebar links

  

  const settingsSections = [
    {
      icon: <Wallet className="text-purple-500" size={24} />,
      title: "Wallet Details",
      description: "Manage your task wallet and payment methods",
      action: () => {}
    },
    {
      icon: <Bell className="text-blue-500" size={24} />,
      title: "Notifications",
      description: "Customize your alert preferences",
      action: () => setNotifications(!notifications)
    },
    {
      icon: <ShieldCheck className="text-green-500" size={24} />,
      title: "Security",
      description: "Two-factor authentication",
      action: () => setTwoFactor(!twoFactor)
    },
    {
      icon: <CreditCard className="text-indigo-500" size={24} />,
      title: "Payout Methods",
      description: "Add or remove payment accounts",
      action: () => {}
    }
  ];

  return (
    <div className="flex h-screen">
          {/* Sidebar */}
          <SidebarLinks />
          <div className="flex-1 pt-6 px-5 pb-4 overflow-y-auto ml-[300px] bg-zinc-950 text-white">
        {/* New Header */}
        <Header title="Settings" icon={<Settings className="text-white" size={40} />} />

       
      <div className="container mx-auto max-w-2xl">
      

        <div className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
          {settingsSections.map((section, index) => (
            <div 
              key={section.title} 
              className={`flex items-center p-5 cursor-pointer hover:bg-zinc-800 transition-colors 
                ${index < settingsSections.length - 1 ? 'border-b border-zinc-700' : ''}`}
              onClick={section.action}
            >
              <div className="mr-4">{section.icon}</div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <p className="text-zinc-400 text-sm">{section.description}</p>
              </div>
              
              {section.title === "Notifications" && (
                <div className={`w-12 h-6 rounded-full ${notifications ? 'bg-green-500' : 'bg-zinc-600'} relative`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform 
                    ${notifications ? 'translate-x-6' : 'translate-x-1'}`}></div>
                </div>
              )}
              
              {section.title === "Security" && (
                <div className={`w-12 h-6 rounded-full ${twoFactor ? 'bg-green-500' : 'bg-zinc-600'} relative`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform 
                    ${twoFactor ? 'translate-x-6' : 'translate-x-1'}`}></div>
                </div>
              )}

              {(section.title === "Wallet Details" || section.title === "Payout Methods") && (
                <ChevronRight className="text-zinc-500" size={24} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <Lock className="mr-3 text-red-500" size={24} />
            <h2 className="text-xl font-semibold">Account Security</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-red-600/20 text-red-400 py-3 rounded-lg 
              hover:bg-red-600/30 transition-colors flex items-center justify-center">
              <Zap className="mr-2" size={20} />
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TaskWalletSettings;