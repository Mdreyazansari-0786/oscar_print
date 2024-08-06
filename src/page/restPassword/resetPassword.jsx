// import React from 'react'

import { Link } from "react-router-dom";

import signup1 from "../../assets/resetPassword/resetpassword.jpeg";
import googleLogo from "../../assets/signUp/google.svg";
import twitterLogo from "../../assets/signUp/twitter.svg";
import hideLogo from "../../assets/signUp/hideLogo.svg";

const ResetPassword = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <button className="bg-red-600 text-white w-16 px-2 py-3 rounded-lg mx-7 my-3">
        <Link to="/login">Login</Link>
      </button> */}
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="container w-full h-full flex flex-wrap justify-center items-center md:space-x-14">
          <div className="md:w-[50%]  xl:w-[40%]  h-full hidden lg:flex justify-center items-center ">
            <img
              src={signup1}
              alt=""
              className="w-[1100px] h-full object-contain"
            />
          </div>
          <div className="w-[90%] lg:w-[40%] xl:w-[45%] h-[70%] xl:h-[100%] flex justify-center items-center my-8 p-5">
            <div className="flex flex-col space-y-4 w-full">
              <div className="my-6 space-y-2">
                <h1 className="text-4xl font-extrabold">Reset Your Password</h1>
                <p className="text-gray-400">
                  Enter your email and we'll send you a link to reset your
                  password.
                  <br />
                  Please check it.
                </p>
              </div>

              <div className="">
                <div className="flex flex-col space-y-10 lg:space-y-8 xl:space-y-10 ">
                  <div className="flex flex-col space-y-2 relative">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="designer@gmail.com"
                      className="border border-black px-3 py-2 rounded-md"
                    />
                    <span className="absolute -bottom-6 ml-1 text-red-500 text-[13px]">
                      We can not find your email.
                    </span>
                  </div>

                  <div className=" flex flex-col space-y-4">
                    <button className="bg-[#524bad] w-28 text-white px-6 py-2 rounded-lg cursor-pointer">
                      Sign Up
                    </button>
                    <span>
                      Back to{" "}
                      <Link to={"/login"} className="text-blue-400 underline">
                        Log in
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
