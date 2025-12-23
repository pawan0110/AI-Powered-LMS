import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ReviewCard = ({ text, name, image, rating, role }) => {
  return (
    <div
      className="bg-[#0f0f0f] border border-gray-800
                 p-4 rounded-xl
                 shadow-sm hover:border-gray-600
                 transition-all duration-300
                 max-w-sm w-full"
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-2 text-yellow-400 text-sm">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {text}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-100 text-sm">
            {name}
          </h4>
          <p className="text-xs text-gray-400">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
