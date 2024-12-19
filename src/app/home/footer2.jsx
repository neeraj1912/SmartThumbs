"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white mt-10 py-12 px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="Logo" className="w-14 h-auto" />
              <div>
                <h2 className="text-4xl font-semibold text-white">
                  Micro Task <span className="text-purple-500">Vault</span>
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  Discover, Complete, Earn Crypto
                </p>
              </div>
            </div>

            <p className="text-gray-300 max-w-md">
              Empowering businesses with innovative solutions and cutting-edge
              technology. Your success is our mission.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={28} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram size={28} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter size={28} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={28} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
              Contact Info
            </h4>
            <div className="text-gray-300 space-y-3">
              <p>
                <span className="font-semibold text-white">Address:</span>
                <br />
                VIT Bhopal University,
                <br />
                Kothir Kalan, Sehore 466001
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>
                <br />
                +91 9993183065
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>
                <br />
                microtaskvault@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Micro Task Vault. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
