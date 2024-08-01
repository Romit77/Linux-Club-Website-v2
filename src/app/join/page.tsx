"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";

function page() {
  return (
    <>
      <Navbar />
      <motion.div
        className="text-white flex items-center justify-center h-screen md:text-4xl  font-bold overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Recruitment Closed for now :)
      </motion.div>
      <Footer />
    </>
  );
}

export default page;
