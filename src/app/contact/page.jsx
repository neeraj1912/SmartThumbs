"use client"
import React, { useState } from 'react';
import Header from "@/components/HeaderWithFloatingNavbar";import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Send,
  AlertTriangle,
  Home,
  User
} from 'lucide-react';



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setError(false);
    }, 1500);
  };

  return (
    <div className="bg-zinc-950 min-h-screen pt-5 text-white">
      <div className='bg-zinc-950 mx-16 '>
        <Header title="Contact Us" />
        
      </div>
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/20 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="mr-2 text-purple-400" size={20} />
            <span className="text-purple-300">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Contact Our Team
          </h1>
          <p className="text-zinc-300 max-w-3xl mx-auto text-lg">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-900 rounded-2xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="What can we help you with?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-zinc-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 flex items-center">
                  <AlertTriangle className="mr-3 text-red-500" size={24} />
                  <p className="text-red-300">Please fill out all required fields.</p>
                </div>
              )}

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center">
                  <Send className="mr-3 text-green-500" size={24} />
                  <p className="text-green-300">Your message has been sent successfully!</p>
                </div>
              ) : (
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg 
                    hover:from-purple-600 hover:to-pink-600 transition-all duration-300 
                    flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="mr-4 text-purple-500" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-zinc-400">support@taskmicrowallet.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="mr-4 text-green-500" size={24} />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="mr-4 text-red-500" size={24} />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-zinc-400">123 Task Street, Tech Hub, CA 94000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Support Hours
              </h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-300">Monday - Friday</span>
                  <span className="text-zinc-400">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Saturday</span>
                  <span className="text-zinc-400">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Sunday</span>
                  <span className="text-zinc-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
