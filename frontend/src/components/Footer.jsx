import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/signup3.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-28 items-start">

        {/* Brand Info */}
        <div className="lg:w-[35%] md:w-[50%] w-full">
          <img
            src={logo}
            alt="CodeNex logo"
            className="h-10 mb-6 rounded-md -mt-4"
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
        <div className="lg:w-[20%] w-full mt-2">
          <h3 className="text-white font-semibold mb-4">
            Platform
          </h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/allcourses")}
            >
              Browse Courses
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              Student Dashboard
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign In
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="lg:w-[20%] w-full mt-2">
          <h3 className="text-white font-semibold mb-4">
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

        {/* Social */}
        <div className="lg:w-[20%] w-full mt-2">
          <h3 className="text-white font-semibold mb-4">
            Connect With Me
          </h3>
          <div className="flex flex-col gap-3 text-sm">
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
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} CodeNex. Built for learning and growth.
      </div>
    </footer>
  );
};

export default Footer;
