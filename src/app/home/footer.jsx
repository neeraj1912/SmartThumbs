"use client"
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
          {/* Logo and Address Section */}
          <div className="flex flex-col items-start p-3">
            <Link href="/" className="mb-1">
              <Image 
                src="/images/Infinity.png"  
                alt="Company Logo" 
                width={200} 
                height={50} 
                className="mb-0"
                priority={true}
              />
              
            </Link>
            <div className="text-gray-400 text-sm">
              <p> VIT BHOPAL UNIVERSITY ,</p>
              <p> Kothir Kalan   </p>
              <p> Sehore  466001 </p>
              <p className="mt-2">Phone: +91 9993183065</p>
              <p>Email: microtaskvault@gmail.com</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved | Micro Task Vault
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;