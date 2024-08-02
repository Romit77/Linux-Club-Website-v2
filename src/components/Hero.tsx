"use client";
import { Vortex } from "./ui/vortex";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      <div className="w-[calc(100%-1rem)] mx-auto rounded-md  h-screen overflow-x-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen "
        >
          <motion.h2
            className="text-white text-2xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-gradient">Linux Club VIT Bhopal</span>
          </motion.h2>
          <motion.p
            className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            &quot;Explore the world of Linux with our club. Learn, collaborate,
            and delve into the power of open-source technology together.&quot;
          </motion.p>
        </Vortex>
      </div>
    </>
  );
}
