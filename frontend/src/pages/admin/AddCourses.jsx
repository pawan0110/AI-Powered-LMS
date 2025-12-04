import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/empty.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { serverUrl } from "../../App";
import { MdEdit } from "react-icons/md";
import img from "../../assets/empty.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setCourseData } from "../../redux/courseSlice";

function AddCourses() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [selectedCourse, setselectedCourse] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const thumb = useRef();
  const [frontendImage, setFrontendImage] = useState(null);
  const [backend, setBackendImage] = useState(null);
  let [loading, setLoading] = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  const getCourseById = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/course/getcourse/${courseId}`,
        { withCredentials: true }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCourse) {
      setTitle(selectedCourse.title || "");
      setDescription(selectedCourse.description || "");
      setCategory(selectedCourse.category || "");
      setLevel(selectedCourse.level || "");
      setPrice(selectedCourse.price || "");
      setFrontendImage(selectedCourse.thumbnail || img);
      setIsPublished(selectedCourse?.isPublished);
    }
  }, [selectedCourse]);

  useEffect(() => {
    getCourseById();
  }, []);
  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };

  const editCourseHandler = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("category", category);
    formData.append("level", level);
    formData.append("price", price);
    formData.append("thumbnail", backendIamge);
    formData.append("isPublished", isPublished);

    try {
      const result = await axios.post(
        `${serverUrl}/api/course/editcourse/${courseId}`,
        formData,
        { withCredentials: true }
      );

      const updatedCourse = result.data;
      if (updatedCourse.isPublished) {
        const updatedCourses = courseData.map((c) =>
          c._id === courseId ? updatedCourse : c
        );
      }
      if (!courseData.some((c) => c._id === courseId)) {
        updatedCourses.push(updatedCourse);
      }
      dispatchEvent(setCourseData(updatedCourses));

      navigate("/courses");
      toast.success("Course updated");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const removeCourse = async () => {
    setLoading(true)
    try {
      const result = await axios.delete(`${serverUrl}/api/course/removecourse/${courseId}` , {withCredentials:true})
      toast.success("Course Deleted")
       const filteredCourses = courseData.filter(c => c._id !== courseId);
      dispatch(setCourseData(filteredCourses));
      console.log(result)
      navigate("/courses")
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      setLoading(false)
    }
  }

  return <div>AddCourses</div>;
}

export default AddCourses;
