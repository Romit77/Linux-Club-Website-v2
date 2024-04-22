"use client";

import React from "react";
import { motion } from "framer-motion";

function page() {
  return (
    <motion.div
      className="text-white flex items-center justify-center h-screen text-4xl font-bold overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      Recruitmment Closed for now :)
    </motion.div>
  );
}

export default page;
