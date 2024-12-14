"use client"
import React from 'react';
import { 
  Target, 
  Globe, 
  Users, 
  Rocket, 
  Heart, 
  CheckCircle 
} from 'lucide-react';

import Header from "@/components/HeaderWithFloatingNavbar";


const TeamMember = ({ name, role, image }) => (
  <div className="bg-zinc-900 rounded-2xl p-6 text-center transform transition-all hover:scale-105">
    <img 
      src={`/api/placeholder/150/150?text=${name.replace(' ', '+')}`} 
      alt={name} 
      className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-purple-500"
    />
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-zinc-400">{role}</p>
  </div>
);

const AboutUsPage = () => {
  const coreValues = [
    {
      icon: <Target className="text-purple-500" size={32} />,
      title: "Precision",
      description: "Delivering accurate and reliable micro task solutions with unparalleled efficiency."
    },
    {
      icon: <Globe className="text-blue-500" size={32} />,
      title: "Accessibility",
      description: "Breaking down barriers and creating opportunities for global task completion."
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Community",
      description: "Fostering a supportive ecosystem that empowers individuals through meaningful work."
    }
  ];

  const teamMembers = [
    { name: "Parv Daga", role: "Member" },
    { name: "Neeraj Choudhary", role: "Member" },
    { name: "Ayush Patel", role: "Member" },
    { name: "Rashi Dubey", role: "Member" },
    { name: "Samridhi Jaiswal", role: "Member" },
    { name: "Nakshatra Raghuvanshi", role: "Member" },
    { name: "Ridhima Rai", role: "Member" },
    { name: "Vedant Patel", role: "Member" }
    
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-5">
      <div className='bg-zinc-950 mx-16 '>
      <Header title="About Us"></Header>
      </div>
      
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/20 px-4 py-2 rounded-full mb-4">
            <Rocket className="mr-2 text-purple-400" size={20} />
            <span className="text-purple-300">Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Empowering Global Micro-Work
          </h1>
          <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
            We're revolutionizing the way people work by creating a seamless, transparent, and rewarding platform for micro tasks that connects skilled individuals with opportunities worldwide.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div 
                key={value.title} 
                className="bg-zinc-900 rounded-2xl p-8 text-center transform transition-all hover:scale-105"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.name} 
                name={member.name} 
                role={member.role} 
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-zinc-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-center mb-4">
                <CheckCircle className="text-green-500" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50,000+</h3>
              <p className="text-zinc-400">Tasks Completed</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Users className="text-blue-500" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
              <p className="text-zinc-400">Countries Served</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Globe className="text-purple-500" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">$5M+</h3>
              <p className="text-zinc-400">Earnings Distributed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;