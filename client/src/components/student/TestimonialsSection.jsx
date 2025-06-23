import React, { useState, useEffect, useRef } from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState({});
  const carouselRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dummyTestimonial.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dummyTestimonial.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + dummyTestimonial.length) % dummyTestimonial.length
    );
  };

  // Toggle testimonial expansion
  const toggleExpansion = (index) => {
    setIsExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Enhanced testimonial data with more details
  const enhancedTestimonials = dummyTestimonial.map((testimonial, index) => ({
    ...testimonial,
    id: index,
    date: new Date(
      Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    course: [
      "JavaScript Fundamentals",
      "React Mastery",
      "Python for Beginners",
    ][index % 3],
    progress: Math.floor(Math.random() * 40) + 60, // 60-100%
    verified: true,
    fullFeedback:
      testimonial.feedback +
      " The course structure was well-organized and the instructors were incredibly knowledgeable. I particularly enjoyed the hands-on projects that helped me apply what I learned in real-world scenarios. The community support was also fantastic - I never felt alone in my learning journey. I would definitely recommend this platform to anyone looking to advance their skills.",
  }));

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by 10,000+ learners worldwide
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Learners Say
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our learners as they share their journeys of
            transformation, success, and how our platform has made a difference
            in their lives.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.8/5</div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-500">Completion Rate</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-gray-200/50 border border-gray-100">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {enhancedTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg
                        className="w-12 h-12 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Testimonial Content */}
                    <div className="mb-8">
                      <p
                        className={`text-lg md:text-xl text-gray-700 leading-relaxed ${
                          isExpanded[index] ? "" : "line-clamp-4"
                        }`}
                      >
                        {isExpanded[index]
                          ? testimonial.fullFeedback
                          : testimonial.feedback}
                      </p>

                      {!isExpanded[index] &&
                        testimonial.fullFeedback.length >
                          testimonial.feedback.length && (
                          <button
                            onClick={() => toggleExpansion(index)}
                            className="text-blue-600 hover:text-blue-700 font-medium mt-2 transition-colors"
                          >
                            Read more
                          </button>
                        )}

                      {isExpanded[index] && (
                        <button
                          onClick={() => toggleExpansion(index)}
                          className="text-blue-600 hover:text-blue-700 font-medium mt-2 transition-colors"
                        >
                          Show less
                        </button>
                      )}
                    </div>

                    {/* Author Section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-500">
                              {testimonial.course}
                            </span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Rating and Progress */}
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(testimonial.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm font-medium text-gray-600 ml-1">
                            {testimonial.rating}
                          </span>
                        </div>

                        <div className="text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <span>Progress</span>
                            <span className="font-medium">
                              {testimonial.progress}%
                            </span>
                          </div>
                          <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                              style={{ width: `${testimonial.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Auto-play indicator */}
            <div className="absolute top-4 right-4">
              <div
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  isAutoPlaying ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {enhancedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12">
            {/* Glassy Background with Backdrop Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-3xl"></div>

            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-medium">
                Join thousands of learners who have transformed their careers
                with our platform. Start your first course today and see the
                difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Browse Courses
                </button>
                <button className="px-8 py-3 bg-white/80 backdrop-blur-sm border border-white/50 text-gray-800 font-semibold rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
