import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeBtn from '../components/ThemeBtn';

const ForgotPassword = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password reset logic here
    alert('Password reset link sent to your email.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 transition-all duration-700 ease-in-out">
      {/* Theme Toggle Button */}
      <ThemeBtn isVisible={isVisible} />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          className={`p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 hover:-translate-x-1 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Header Section */}
          <div
            className={`text-left mb-12 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Forgot your password?
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Forgot Password Form Card */}
          <div
            className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-6 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholder="Enter email address"
                    className={`w-full px-4 py-4 bg-gray-50/80 dark:bg-gray-700/50 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                      emailFocused || email
                        ? "border-purple-500 dark:border-purple-400 shadow-lg transform scale-105"
                        : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                    }`}
                  />
                  {(emailFocused || email) && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Send reset link
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-40 left-16 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-16 h-16 bg-blue-100 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-32 w-28 h-28 bg-purple-100 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default ForgotPassword; 