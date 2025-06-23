import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();

    navigate("/course-list/" + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-300/30 rounded-full shadow-md px-2"
    >
      <img
        className="md:w-auto w-8 px-2 opacity-70"
        src={assets.search_icon}
        alt="search_icon"
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        className="w-full h-full outline-none text-gray-700 bg-gray-100 rounded-full px-4 placeholder-gray-400 focus:bg-white transition"
        placeholder="Search for courses"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-full px-10 md:px-16 md:py-3 py-2 mx-1 shadow transition-all duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
