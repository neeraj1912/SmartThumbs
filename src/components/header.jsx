import { motion } from "framer-motion";
import { Target } from 'lucide-react';

const Header = ({ title, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="header-container mb-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-700"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && <div className="mr-4">{icon}</div>}  {/* Conditionally render the icon */}
          <h1 className="text-white font-bold text-5xl ml-3 tracking-tight">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Target className="text-purple-500" size={40} />
          <div>
            <h2 className="text-4xl font-semibold text-white">
              Micro Task <span className="text-purple-500">Vault</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Discover, Complete, Earn Crypto
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
