// components/GreetingMessage.js
import React, { useState, useEffect } from "react";

const GreetingMessage = ({ user = "Guest" }) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []); // Runs only on mount

  return (
    <div className="welcome-message p-4 ">
      <h1 className="text-4xl font-bold text-white mt-3">
        {greeting}, <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 via-pink-500 to-blue-800 bg-clip-text text-transparent">{user}!</span>
      </h1>
      <p className="text-slate-400 text-2xl mt-2">Welcome to Micro Task Vault.</p>
    </div>
  );
};

export default GreetingMessage;
