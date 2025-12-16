import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/signup3.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-36 items-start justify-center">

        {/* Brand Info */}
        <div className="lg:w-[40%] md:w-[50%] w-full">
          <img
            src={logo}
            alt="CodeNex logo"
            className="h-10 mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold text-white mb-3">
            CodeNex
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            CodeNex is a modern learning platform built to help students
            and professionals gain practical skills through structured courses,
            expert guidance, and real-world projects.
          </p>
        </div>

        {/* Navigation */}
        <div className="lg:w-[30%] w-full">
          <h3 className="text-white font-semibold mb-3">
            Platform
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/allcourses")}>
              Browse Courses
            </li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/profile")}>
              Student Dashboard
            </li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/login")}>
              Sign In
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="lg:w-[30%] w-full">
          <h3 className="text-white font-semibold mb-3">
            Popular Tracks
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              Full Stack Development
            </li>
            <li className="hover:text-white cursor-pointer">
              Artificial Intelligence
            </li>
            <li className="hover:text-white cursor-pointer">
              Data Analytics
            </li>
            <li className="hover:text-white cursor-pointer">
              Product & UI Design
            </li>
          </ul>
        </div>

        {/* Personal Links */}
        <div className="lg:w-[30%] w-full">
          <h3 className="text-white font-semibold mb-3">
            Connect With Me
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/pawan0110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="http://www.linkedin.com/in/pawan-kumar0075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <FaLinkedin className="w-5 h-5 text-blue-500" />
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} CodeNex. Built for learning and growth.
      </div>
    </footer>
  );
};

export default Footer;
