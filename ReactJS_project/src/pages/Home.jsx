import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import { motion } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-700 ease-in-out">
      {/* Theme Toggle Button */}
      <ThemeBtn isVisible={isVisible} />

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-sm mx-auto">
          {/* Logo/Icon Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="relative">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-600 dark:from-purple-400 dark:to-blue-500 rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-3">
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 dark:from-purple-400 dark:to-blue-500 rounded-lg transform rotate-45"></div>
                </div>
              </div>
              {/* Floating particles animation */}
              <div
                className="absolute -top-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "2s" }}
              ></div>
              <div
                className="absolute -top-1 -right-3 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
              ></div>
              <div
                className="absolute -bottom-1 -left-3 w-2 h-2 bg-purple-300 rounded-full animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              ></div>
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                PopX
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed px-4">
              Lorem ipsum dolor sit amet, <br className="hidden sm:block" />
              consectetur adipiscing elit,
            </p>
          </motion.div>

          {/* Buttons Container */}
          <div className="space-y-4">
            {/* Create Account Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
              onClick={() => navigate("/register")}
            >
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>

            {/* Login Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full bg-purple-100 dark:bg-gray-700 hover:bg-purple-200 dark:hover:bg-gray-600 text-purple-700 dark:text-purple-300 font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
              onClick={() => navigate("/login")}
            >
              <span className="relative z-10">Already Registered? Login</span>
            </motion.button>
          </div>

          {/* Bottom Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 flex justify-center space-x-2"
          >
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-40 right-16 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-28 h-28 bg-purple-100 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-36 h-36 bg-blue-100 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
