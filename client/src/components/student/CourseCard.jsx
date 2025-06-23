import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const finalPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);
  const originalPrice = course.coursePrice.toFixed(2);
  const discountPercentage = course.discount;

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={"/course/" + course._id}
      className="group relative block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={course.courseThumbnail}
          alt={course.courseTitle}
        />

        {/* Overlay with play button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
            <img src={assets.play_icon} alt="Play" className="w-8 h-8" />
          </div>
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
            -{discountPercentage}%
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-700 text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
          {course.category || "Course"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
          {course.courseTitle}
        </h3>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <img
            src={course.educator?.profilePicture || assets.user_icon}
            alt={course.educator?.name}
            className="w-8 h-8 rounded-full mr-3 border-2 border-gray-100"
          />
          <p className="text-sm font-medium text-gray-700">
            {course.educator?.name || "Instructor"}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-3">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-5 h-5"
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
              />
            ))}
          </div>
          <span className="text-sm font-bold text-gray-800 mr-1">
            {calculateRating(course).toFixed(1)}
          </span>
          <span className="text-sm text-gray-500">
            ({course.courseRatings?.length || 0})
          </span>
        </div>

        {/* Course Info */}
        <div className="flex items-center justify-between mb-5 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <div className="flex items-center">
            <img src={assets.lesson_icon} alt="" className="w-5 h-5 mr-2" />
            <span className="font-medium">
              {course.courseContent?.length || 0} chapters
            </span>
          </div>
          <div className="flex items-center">
            <img src={assets.time_clock_icon} alt="" className="w-5 h-5 mr-2" />
            <span className="font-medium">
              {course.totalDuration || "2h 30m"}
            </span>
          </div>
        </div>

        {/* Price and Enrolled */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {discountPercentage > 0 ? (
              <>
                <span className="text-2xl font-bold text-gray-900">
                  {currency}
                  {finalPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {currency}
                  {originalPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                {currency}
                {finalPrice}
              </span>
            )}
          </div>

          {/* Enrolled Students */}
          <div className="text-sm text-gray-600 font-medium bg-blue-50 px-3 py-1.5 rounded-full">
            {course.enrolledStudents?.length || 0} students
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
