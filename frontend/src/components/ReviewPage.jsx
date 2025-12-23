import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";

function ReviewPage() {
  const allReview =
    useSelector((state) => state.review?.allReview) ?? [];

  const latestReview = Array.isArray(allReview)
    ? allReview.slice(0, 6)
    : [];

  return (
    <div className="w-full bg-white py-12">

      {/* Heading */}
      <div className="text-center px-5 mb-8">
        <h1 className="md:text-[40px] text-[28px] font-semibold text-gray-900">
          Real Reviews from Real Learners
        </h1>

        <p className="lg:w-[50%] md:w-[80%] mx-auto text-[14px] mt-4 text-gray-600">
          Discover how our virtual courses are transforming learning experiences
          through real feedback from students and professionals worldwide.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid gap-6
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-3"
        >
          {latestReview.map((item, index) => (
            <ReviewCard
              key={item._id || index}
              rating={item?.rating}
              image={item?.user?.photoUrl}
              text={item?.comment}
              name={item?.user?.name}
              role={item?.user?.role}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default ReviewPage;
