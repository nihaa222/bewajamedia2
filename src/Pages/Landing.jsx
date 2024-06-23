import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing() {
  const [loading, setLoading] = useState(true); // Start with loading state as true

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false); // After 3000ms (3 seconds), set loading to false
    }, 2000);

    return () => clearTimeout(timeoutId); // Clean up the timeout when component unmounts
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-black relative">
      {loading ? (
        <>
          <div>
            <svg width="150" height="150">
              <circle
                r="45"
                cx="75"
                cy="75"
                stroke="#af5210d2"
                strokeWidth="10"
              ></circle>
            </svg>
          </div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3, // Duration set to 60 seconds for one full rotation (like a minute hand)
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear", // Ensures smooth linear animation
            }}
            className="absolute w-2 h-12  mb-12 bg-orange-500 rounded-full"
            style={{ transformOrigin: "bottom" }} // Set transform origin for proper rotation
          ></motion.div>
        </>
      ) : (
        <div
          className="absolute z-10 inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url('/background.png')` }}
        >
          <div className="z-50">
            <div className="bg-black py-2 w-full h-12">
              <img className="ml-8 h-8 w-8" src="/header-logo.png" alt="Logo" />
            </div>
            <motion.div className="flex flex-col items-center justify-center gap-12 md:gap-10 w-full h-screen p-8">
              <motion.p className="text-white font-semibold text-xs md:text-[16px] text-center">
                Struggling to figure out which Ad is actually giving you
                results?
              </motion.p>
              <motion.p
                initial={{ x: "-100vw" }}
                animate={{ x: "0" }}
                transition={{ duration: 1, stiffness: 140 }}
                className="font-bold text-[#DD6B20] text-4xl whitespace-nowrap  md:text-7xl"
              >
                M<span className="text-[#c36b31]">eet</span>{" "}
                <span className="text-[#d87838d4]">Tr</span>
                <span className="text-[#c18c2ad0]">ac</span>
                <span className="text-[#caa820c0]">ko</span>
                <span className="text-[#e0c631e1]">city!</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, stiffness: 140, delay: 1 }}
                className="max-w-[600px] text-white text-center text-sm md:text-[16px] leading-snug"
              >
                Your all-in-one attribution tool which will accurately tell you
                which campaign, ad set, ad or platform is delivering results! It
                removes all the guesswork from the equation.
              </motion.p>
              <div>
                <Link to="/sign">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, stiffness: 140, delay: 1.5 }}
                    className="text-white bg-orange-500 text-sm h-8 px-5 py-1 rounded-2xl"
                  >
                    Start Your Free Trial Today
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
