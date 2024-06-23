import { IoEye } from "react-icons/io5";
import { motion } from "framer-motion";

function SignIn() {
  return (
    <motion.div className="w-screen h-screen p-10 flex justify-center items-center overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}
      ></div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, stiffness: 140 }}
        className=" h-[400px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] z-10 relative"
      >
        <div className="absolute text-white inset-0  backdrop-filter p-10 backdrop-blur-[2px] border border-gray-900 border-opacity-10 rounded-2xl bg-white bg-opacity-5 gap-10 shadow-5xl ">
          <p className=" font-bold text-lg text-center">
            Sign in to your Account
          </p>
          <form className="mt-10 flex flex-col gap-8 ">
            <div className="flex flex-col gap-1">
              <label>Email :</label>
              <input
                className=" px-2 rounded py-1  border-l-[0.2px] border-r border-t-[1px] border-b-[1px] border-r-gray-500 border-l-gray-500 border-white  bg-transparent"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="relative">
                Password :
                <span className=" absolute right-1 text-xs font-bold mt-1 text-[#c5c533]">
                  Forgot your password?
                </span>
              </label>
              <input
                className=" px-2 rounded py-1  border-l-[0.2px] border-r border-t-[1px] border-b-[1px] border-b-gray-500 border-r-gray-500 border-l-gray-500 border-white  bg-transparent"
                type="text"
              ></input>
              <span className="absolute top-9 right-3">
                <IoEye color="#f0f0f03c" />
              </span>
            </div>
            <button className="absolute bottom-20 left-[50%] right-[50%] translate-x-[-50%] p-[5px] w-3/4 font-swmibold text-sm rounded-2xl bg-orange-500">
              Sign In
            </button>
            <div className="absolute bottom-10 left-[20%] right-[20%] translate-x-[25%] ">
              <span className="text-xs mr-2 underline">
                Don't have an account?
              </span>
              <span className=" font-semibold text-xs text-[#c5c533]">
                Signup
              </span>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SignIn;
