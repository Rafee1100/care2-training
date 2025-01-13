"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PositiveYaxisAnimate({ children, classes = "" }: any) {
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, bounce: 0.1, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
