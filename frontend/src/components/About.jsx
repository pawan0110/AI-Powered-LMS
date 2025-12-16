import React from "react";
import learning from "../assets/learning-team.jpg";
import VideoPlayer from "./videoPlayer";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidBadgeCheck } from "react-icons/bi";

function About() {
  return (
    <div className="w-full lg:h-[70vh] min-h-[50vh] flex flex-wrap items-center justify-center gap-6 mb-16">

      {/* Image */}
      <div className="lg:w-[40%] md:w-[80%] w-full flex items-center justify-center relative">
        <img
          src={learning}
          alt="Online learning platform"
          className="w-[85%] h-auto rounded-xl shadow-lg"
        />
        <VideoPlayer />
      </div>

      {/* Content */}
      <div className="lg:w-[50%] md:w-[70%] w-full flex flex-col gap-4 px-8 md:px-16">

        <div className="flex items-center gap-4 text-sm font-semibold uppercase">
          Who We Are
          <TfiLayoutLineSolid className="w-8 h-8 opacity-70" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold">
          Build Skills. Track Progress. Learn Smarter.
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-xl">
          Our platform is designed to power modern education. From structured
          courses to real-time progress tracking, we help learners and instructors
          stay aligned, engaged, and productive in one seamless system.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3">
            <BiSolidBadgeCheck className="w-5 h-5 text-green-600" />
            Structured Learning Paths
          </div>
          <div className="flex items-center gap-3">
            <BiSolidBadgeCheck className="w-5 h-5 text-green-600" />
            Industry-Level Instructors
          </div>
          <div className="flex items-center gap-3">
            <BiSolidBadgeCheck className="w-5 h-5 text-green-600" />
            Performance Tracking
          </div>
          <div className="flex items-center gap-3">
            <BiSolidBadgeCheck className="w-5 h-5 text-green-600" />
            Anywhere, Anytime Access
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
