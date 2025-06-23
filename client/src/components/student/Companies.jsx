import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const companies = [
    {
      name: "Microsoft",
      logo: assets.microsoft_logo,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Walmart",
      logo: assets.walmart_logo,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Accenture",
      logo: assets.accenture_logo,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Adobe",
      logo: assets.adobe_logo,
      color: "from-red-500 to-red-600",
    },
    {
      name: "PayPal",
      logo: assets.paypal_logo,
      color: "from-blue-400 to-blue-500",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Trusted by Global Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners from world-renowned companies who trust
            our platform for their professional development
          </p>
        </div>

        {/* Companies grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                hoveredCompany === company.name ? "ring-2 ring-blue-500/50" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: isVisible
                  ? "fadeInUp 0.6s ease-out forwards"
                  : "none",
              }}
              onMouseEnter={() => setHoveredCompany(company.name)}
              onMouseLeave={() => setHoveredCompany(null)}
            >
              {/* Hover effect background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Company logo */}
              <div className="relative z-10 p-4 bg-white rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 object-contain filter group-hover:brightness-110 transition-all duration-300"
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                />
              </div>

              {/* Company name */}
              <h3 className="mt-4 text-sm md:text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {company.name}
              </h3>

              {/* Tooltip */}
              <div
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 whitespace-nowrap`}
              >
                {company.name} employees learn with us
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600 font-medium">Active Learners</p>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-gray-600 font-medium">Completion Rate</p>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <p className="text-gray-600 font-medium">Student Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Companies;
