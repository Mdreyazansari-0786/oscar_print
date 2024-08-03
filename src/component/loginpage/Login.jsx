import login1 from "../../assets/login/login1.jpeg";
import login2 from "../../assets/login/adminlogo.png";

const Login = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="container w-full h-full flex flex-wrap justify-center items-center space-x-4">
          <div className="w-[40%] h-full hidden md:flex justify-center items-center">
            <img src={login1} alt="" className="w-[540px]" />
          </div>
          <div className="w-[90%] md:w-[40%] h-[100%] flex justify-center items-center my-8">
            <div className="flex flex-col space-y-5 lg:space-y-10 w-full px-3 mx-auto">
              <div className="flex justify-center items-center p-3">
                <img
                  src={login2}
                  alt=""
                  className="w-[170px] h-[70px] lg:w-[250px] lg:h-[105px] xl:w-[300px] xl:h-[125px]"
                />
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col space-y-6 w-[90%]  ">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="">
                      Email
                    </label>
                    <input
                      type="text"
                      className="border border-[#e6e7e8] px-3 py-1 xl:py-3 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      className="border border-[#e6e7e8] px-3 py-1 xl:py-3 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center  ">
                <div className="w-[87%]">
                  <button className="bg-[#0e1422] w-full text-white py-2 xl:py-3 outline-none  rounded-md hover:bg-red-500 active:scale-105 transition-all">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
