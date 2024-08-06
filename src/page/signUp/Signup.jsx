// import React from "react";

import { Link } from "react-router-dom";

import signup1 from "../../assets/signUp/signup1.webp";
import googleLogo from "../../assets/signUp/google.svg";
import twitterLogo from "../../assets/signUp/twitter.svg";
import hideLogo from "../../assets/signUp/hideLogo.svg";

const SignUp = () => {
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
            <div className="flex flex-col space-y-7 w-full">
              <div className="my-6 space-y-2">
                <h1 className="text-4xl font-extrabold">Sign Up</h1>
                <p className="text-gray-400">
                  Sign up for free to access to in any of our products
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text-center border border-black py-4 rounded-md cursor-pointer">
                  <button className="text-blue-500 w-full flex justify-center items-center space-x-2 text-xl">
                    <img src={googleLogo} alt="" className="size-6" />
                    <span className="">Continue with Google</span>
                  </button>
                </div>
                <div className="text-center border border-black py-4 rounded-md cursor-pointer">
                  <button className="text-blue-500  flex justify-center items-center space-x-2 w-full text-xl cursor-pointer">
                    <img src={twitterLogo} alt="" className="size-6" />
                    <span className="cursor-pointer">
                      Continue with Twitter
                    </span>
                  </button>
                </div>
              </div>
              <div className="">
                <form action="" onSubmit={(e) => handleSignUp(e)}>
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
                        Error Message
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 relative ">
                      <div className="flex justify-between items-center ">
                        <label htmlFor="password">Password</label>
                        <img src={hideLogo} alt="" className="size-6 mr-2" />
                      </div>
                      <input
                        id="password"
                        type="password"
                        placeholder="******"
                        className="border border-black px-3 py-2 rounded-md"
                      />
                      <span className="ml-1 text-red-500 text-[13px] absolute -bottom-6 lg:-bottom-10 xl:-bottom-6">
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </span>
                    </div>

                    <div className=" flex flex-col space-y-2 !mt-12 ">
                      <div className="space-x-2">
                        <input type="checkbox" id="tc1" />
                        <label htmlFor="tc1">
                          Agree to our Terms of use and Privacy Policy
                        </label>
                      </div>
                      <div className="space-x-2">
                        <input type="checkbox" id="tc2" />
                        <label htmlFor="tc2">
                          Subscribe to our monthly newsletter
                        </label>
                      </div>
                    </div>

                    <div className=" flex flex-col space-y-2">
                      <button className="bg-[#524bad] w-28 text-white px-6 py-2 rounded-lg cursor-pointer">
                        Sign Up
                      </button>
                      <span>
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-blue-400 underline">
                          Log in
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
