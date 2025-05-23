import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate("/profile", { state: { email, password } });
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
          onClick={() => navigate(-1)}
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
              Signin to your <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                PopX account
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
            </p>
          </div>

          {/* Login Form Card */}
          <div
            className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-6 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Email Field */}
            <div
              className={`mb-6 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
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

            {/* Password Field */}
            <div
              className={`mb-8 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <label className="block text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  placeholder="Enter password"
                  className={`w-full px-4 py-4 pr-12 bg-gray-50/80 dark:bg-gray-700/50 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                    passwordFocused || password
                      ? "border-purple-500 dark:border-purple-400 shadow-lg transform scale-105"
                      : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                {(passwordFocused || password) && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              className={`w-full bg-gradient-to-r from-gray-400 to-gray-500 hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-500 dark:hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${
                email && password
                  ? "from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500"
                  : ""
              }`}
              style={{ transitionDelay: "600ms" }}
              disabled={!email || !password}
              onClick={handleLogin}
            >
              <span className="relative z-10 flex items-center justify-center">
                Login
                {email && password && (
                  <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Footer Links */}
          <div
            className={`mt-8 text-center space-y-4 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200">
              Forgot Password?
            </button>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                or
              </span>
              <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
            </div>
            <button
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements - Different pattern from welcome page */}
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

      {/* Floating geometric shapes for visual contrast */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-1/4 w-4 h-4 border-2 border-purple-300 dark:border-purple-600 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/4 w-3 h-3 bg-blue-400 dark:bg-blue-500 transform rotate-45 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-12 w-6 h-6 border border-purple-400 dark:border-purple-500 rounded-full animate-ping"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
