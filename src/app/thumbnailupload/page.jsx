"use client";
import React, { useState } from "react";
import { Upload, X, Plus } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";

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

const ThumbnailUploadPage = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [targetFeedbackCount, setTargetFeedbackCount] = useState("");

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newThumbnails = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Date.now() + Math.random(),
    }));

    setThumbnails((prev) => [...prev, ...newThumbnails]);
  };

  const removeThumbnail = (id) => {
    setThumbnails((prev) => prev.filter((thumb) => thumb.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      taskTitle,
      description,
      totalPayment,
      targetFeedbackCount,
      thumbnails,
    });
  };

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

  return (
    <div className="bg-gray-950">
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
      <div className="w-4/5 ml-auto py-8 bg-gray-950 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto shadow-2xl rounded-2xl p-8 border border-purple-300"
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Create Thumbnail Feedback Task
          </h1>

          {/* Task Title */}
          <div className="mb-4">
            <label
              htmlFor="taskTitle"
              className="block text-white font-semibold mb-2"
            >
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-purple-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter task title (e.g., Best Thumbnail for Video)"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white font-semibold mb-2"
            >
              Task Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-purple-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows="4"
              placeholder="Provide details about the thumbnail task"
              required
            />
          </div>

          {/* Thumbnail Upload Section */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Upload Thumbnails
            </label>
            <div className="grid grid-cols-3 gap-4">
              {thumbnails.map((thumb) => (
                <div
                  key={thumb.id}
                  className="relative border-2 border-purple-300 rounded-lg overflow-hidden"
                >
                  <img
                    src={thumb.preview}
                    alt="Thumbnail preview"
                    className="w-full h-40 object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeThumbnail(thumb.id)}
                    className="absolute top-2 right-2 text-white rounded-full p-1 transition"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
              {thumbnails.length < 6 && (
                <label className="border-2 border-purple-300 border-dashed rounded-lg flex items-center justify-center cursor-pointer h-40 transition">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="text-center">
                    <Upload className="mx-auto mb-2 text-white" />
                    <p className="text-white">Add Thumbnails</p>
                  </div>
                </label>
              )}
            </div>
          </div>

          {/* Payment and Feedback Inputs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="totalPayment"
                className="block text-white font-semibold mb-2"
              >
                Total Payment ($)
              </label>
              <input
                type="number"
                id="totalPayment"
                value={totalPayment}
                onChange={(e) => setTotalPayment(e.target.value)}
                className="w-full px-3 py-2 bg-black border border-purple-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter total payment"
                min="0"
                required
              />
            </div>
            <div>
              <label
                htmlFor="targetFeedback"
                className="block text-white font-semibold mb-2"
              >
                Target Feedback Count
              </label>
              <input
                type="number"
                id="targetFeedback"
                value={targetFeedbackCount}
                onChange={(e) => setTargetFeedbackCount(e.target.value)}
                className="w-full px-3 py-2 bg-black border border-purple-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Number of feedback responses"
                min="1"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-purple-800 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center"
            >
              <Plus className="mr-2" /> Create Thumbnail Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThumbnailUploadPage;
