"use client"
"use client"
import React from 'react';
import Header from "@/components/HeaderWithFloatingNavbar";

import { 
  Database, 
  CheckCircle,
  Zap
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-zinc-900 rounded-2xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
    <div className="flex items-center mb-4">
      <Icon className="mr-4 text-purple-500" size={32} />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-zinc-400 mb-4">{description}</p>
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className="mr-2 text-green-500" size={16} />
          <span className="text-zinc-300">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Database,
      title: "Data Labelling",
      description: "Accurate and efficient data labelling solutions for machine learning and AI projects.",
      features: [
        "Image Annotation",
        "Text Categorization",
        "Bounding Box Labelling",
        "Semantic Segmentation"
      ]
    },
    {
      icon: Database,
      title: "Thumbnail Rating",
      description: "Quick and reliable thumbnail rating services to optimize visual content performance.",
      features: [
        "Content Relevance Assessment",
        "Audience Appeal Analysis",
        "Quality Scoring",
        "Optimization Insights"
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-5">
             <div className='bg-zinc-950 mx-16 '>
      <Header title="Services"></Header>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/20 px-4 py-2 rounded-full mb-4">
            <Zap className="mr-2 text-purple-400" size={20} />
            <span className="text-purple-300">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Focused Micro-Task Solutions
          </h1>
          <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
            Micro Task Vault specializes in data labelling and thumbnail rating services, providing precise and reliable solutions for global clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-zinc-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Join thousands of professionals leveraging Micro Task Vault to deliver precise and impactful results for data labelling and thumbnail rating projects.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
              Become a Tasker
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
