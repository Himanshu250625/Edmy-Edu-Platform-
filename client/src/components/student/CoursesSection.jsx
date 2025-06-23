import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Courses", count: allCourses.length, icon: "🎓" },
    {
      id: "programming",
      name: "Programming",
      count: allCourses.filter((c) => c.category === "programming").length,
      icon: "💻",
    },
    {
      id: "design",
      name: "Design",
      count: allCourses.filter((c) => c.category === "design").length,
      icon: "🎨",
    },
    {
      id: "business",
      name: "Business",
      count: allCourses.filter((c) => c.category === "business").length,
      icon: "📊",
    },
    {
      id: "marketing",
      name: "Marketing",
      count: allCourses.filter((c) => c.category === "marketing").length,
      icon: "📈",
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? allCourses.slice(0, 8)
      : allCourses.filter((c) => c.category === activeFilter).slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 hover-lift">
            <img src={assets.play_icon} alt="" className="w-4 h-4 mr-2" />
            Featured Courses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Learn from the{" "}
            <span className="gradient-text">Best Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our top-rated courses across various categories. From
            coding and design to business and wellness, our courses are crafted
            to deliver exceptional results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover-lift ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-sm"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredCourses.map((course, index) => (
            <div
              key={course._id}
              className={`transform transition-all duration-500 hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center group">
            <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              {allCourses.length}+
            </div>
            <div className="text-gray-600">Total Courses</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              50K+
            </div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              4.8
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              200+
            </div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <Link
            to={"/course-list"}
            onClick={() => scrollTo(0, 0)}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transform hover:scale-105 transition-all duration-300 hover-lift"
          >
            Explore All Courses
            <img
              src={assets.arrow_icon}
              alt=""
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <p className="text-gray-500 mt-4 text-sm">
            Join thousands of learners worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
