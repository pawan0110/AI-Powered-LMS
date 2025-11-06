import React, { useState } from "react";
import logo from "../assets/signup3.jpg";
import google from "../assets/google1.png";
import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa"; // Added eye slash icon import
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false); 
  const navigate = useNavigate();

  return (
    <div className="bg-[#dddbdb] w-screen h-screen flex items-center justify-center">
      <form className="w-[90%] md:w-[800px] h-[600px] bg-white shadow-xl rounded-2xl flex">
        {/* Left div */}
        <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center gap-3">
          <div>
            <h1 className="font-semibold text-[black] text-2xl">
              Welcome back
            </h1>
            <h2 className="text-[#999797] text-[18px]">Login your account</h2>
          </div>
          <div className="flex flex-col gap-1 w-[80%] items-start justify-center px-3">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border w-full h-[35px] border-[#e7e6e6] text-[15px] px-[7px]"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              type={show ? "text" : "password"}
              className="border w-full h-[35px] border-[#e7e6e6] text-[15px] px-[7px]"
              placeholder="password"
            />
            {!show ? (
              <IoIosEye className="absolute w-5 h-5 cursor-pointer right-[5%] top-[75%] transform -translate-y-1/2" onClick={() => setShow(prev => !prev)} />
            ) : (
              <FaEyeSlash className="absolute w-5 h-5 cursor-pointer right-[5%] top-[75%] transform -translate-y-1/2" onClick={() => setShow(prev => !prev)} />
            )}
          </div>
          <button className="w-[80%] h-10 bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px]">
            Login
          </button>

          <span className="text-[13px] cursor-pointer text-[#585757]">Forget your password</span>

          <div className="w-[80%] flex items-center gap-2">
            <div className="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
            <div className="w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center">
              Or continue
            </div>
            <div className="w-[25%] h-[0.5px] bg-[#c4c4c4]"></div>
          </div>

          <div className="w-[80%] h-10 border border-black rounded-[5px] flex items-center justify-center">
            <img src={google} className="w-5" alt="" />
            <span className="text-[18px] text-gray-500">oogle</span>
          </div>
          <div className="text-[#6f6f6f]">Create a new account
          <span className="underline underline-offset-1 text-[black] cursor-pointer" onClick={()=> navigate("/signup")}> signup</span>
          </div>
        </div>

        {/* Right div */}
        <div className="md:w-1/2 w-0 h-full rounded-r-2xl bg-black md:flex flex-col items-center justify-center hidden">
          <img src={logo} alt="logo" className="w-32 mb-3 drop-shadow-lg" />
          <span className="text-3xl text-white font-extrabold tracking-wide">
            TeachMate
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;