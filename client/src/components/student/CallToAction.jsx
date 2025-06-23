import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    // Add smooth scroll to courses section or navigate
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    // Add your learn more logic here
    console.log("Learn more clicked");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative flex flex-col items-center gap-8 pt-16 pb-32 px-8 md:px-0 max-w-4xl mx-auto">
        {/* Main heading with modern typography */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight mb-6">
            Learn anything, anytime, anywhere
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with our cutting-edge learning platform.
            Access world-class courses, learn at your own pace, and transform
            your future with expert-led education.
          </p>
        </div>

        {/* Stats section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Expert Courses</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Action buttons with modern styling */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-6 mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={handleGetStarted}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-12 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handleLearnMore}
            className="group flex items-center gap-3 px-8 py-4 rounded-full text-gray-700 font-semibold text-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Learn More</span>
            <img
              src={assets.arrow_icon}
              alt="arrow_icon"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-wrap justify-center items-center gap-8 mt-12 opacity-60 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-sm text-gray-500">
            Trusted by leading companies:
          </div>
          <div className="flex items-center gap-6">
            <img
              src={assets.microsoft_logo}
              alt="Microsoft"
              className="h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <img
              src={assets.adobe_logo}
              alt="Adobe"
              className="h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <img
              src={assets.accenture_logo}
              alt="Accenture"
              className="h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CallToAction;
