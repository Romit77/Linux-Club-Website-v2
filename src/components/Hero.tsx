"use client";
import * as React from "react";
import { Vortex } from "./ui/vortex";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <motion.h2
          className="text-white text-2xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          Linux Club VIT Bhopal
        </motion.h2>
        <motion.p
          className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Welcome to the Linux Club Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In, maiores.
        </motion.p>
        {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div> */}
      </Vortex>
    </div>
  );
}