"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";
import { Button } from "@/components/ui/button";

function page() {
  // function handleClick() {
  //   window.location.href = "https://forms.gle/gT2C3dsoRJV2dbXT8";
  // }

  return (
    <>
      <Navbar />
      <motion.div
        className="text-white flex items-center justify-center h-screen md:text-4xl  font-bold overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* <Button onClick={handleClick}>Join us</Button> */}
        <p>Recruitment Closed for now :)</p>
      </motion.div>
      <Footer />
    </>
  );
}

export default page;
