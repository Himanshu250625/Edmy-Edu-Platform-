import React from "react";
import { assets } from "../../assets/assets";
import image from "../../assets/image.png";
import SearchBar from "../../components/student/SearchBar";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 ml-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Empower your future with the courses designed to
                <span className="text-blue-600 inline-block">
                  fit your{" "}
                  <span className="relative inline-block">
                    choice.
                    <img
                      src={assets.sketch}
                      alt="sketch underline"
                      className="block mx-auto mt-[-8px] w-32 md:w-44 lg:w-56"
                    />
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-600 max-w-xl lg:max-w-none leading-relaxed">
                We bring together world-class instructors, interactive content,
                and a supportive community to help you achieve your personal and
                professional goals.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-lg lg:max-w-none">
              <SearchBar />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full flex justify-center mb-10">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-2xl"></div>

              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt="Learning and Education"
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] object-cover"
                />

                {/* Floating elements for modern look */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">
                      Live Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
