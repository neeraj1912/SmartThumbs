'use client';

import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">
      <div 
        className="w-full max-w-md p-8 mx-4 rounded-2xl border relative z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          animation: 'float 3s infinite ease-in-out'
        }}
      >
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>

        <h2 className="text-4xl font-semibold text-white text-center mb-8">
          Welcome Back
        </h2>
        
        <form className="space-y-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-5 py-4 rounded-full text-white placeholder-gray-300 transition duration-300 outline-none"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />
            <i className="fas fa-envelope absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-5 py-4 rounded-full text-white placeholder-gray-300 transition duration-300 outline-none"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />
            <i className="fas fa-lock absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full text-white font-semibold transition duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(45deg, #00b4db, #0083b0)',
            }}
          >
            Sign In
          </button>

          <div className="text-center">
            <a
              href="#"
              className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}