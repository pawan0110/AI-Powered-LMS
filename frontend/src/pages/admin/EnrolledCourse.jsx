import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function EnrolledCourse() {
  const navigate = useNavigate();

  const { userData, loading } = useSelector((state) => state.user);

  // Loading state
  if (loading || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading enrolled courses...</p>
      </div>
    );
  }

  const enrolledCourses = userData.enrolledCourses || [];

  return (
    <div className="min-h-screen w-full px-4 py-9 bg-gray-50 relative">
      {/* Back Button */}
      <FaArrowLeftLong
        className="absolute top-[3%] md:top-[6%] left-[5%] w-[22px] h-[22px] cursor-pointer"
        onClick={() => navigate("/")}
      />

      <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
        My Enrolled Courses
      </h1>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-500 text-center w-full">
          You haven't enrolled in any course yet.
        </p>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-8">
          {enrolledCourses.map((course) => {
            const courseId = typeof course === "string" ? course : course._id;
            const isPopulated = typeof course === "object" && course !== null;
            const thumbUrl = (isPopulated && course.thumbnail?.url) || "/signup3.jpg";

            return (
            <div
              key={courseId}
              className="bg-white rounded-2xl shadow-md overflow-hidden border w-[280px]"
            >
              {/* Course Thumbnail */}
              <img
                src={thumbUrl}
                alt={isPopulated ? course.title : "Enrolled Course"}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {isPopulated ? course.title : "Enrolled Course"}
                </h2>

                <p className="text-sm text-gray-600 mb-1">
                  {isPopulated ? course.category : ""}
                </p>

                <p className="text-sm text-gray-700 mb-3">
                  {isPopulated ? `Level: ${course.level}` : ""}
                </p>

                {/* Watch Button */}
                <button
                  onClick={() => navigate(`/viewlecture/${courseId}`)}
                  className="w-full py-2 border-2 border-black bg-black text-white rounded-lg text-sm font-light hover:bg-gray-700 transition"
                >
                  Watch Now
                </button>
              </div>
            </div>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default EnrolledCourse;
