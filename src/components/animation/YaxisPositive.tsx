"use client";
import React from "react";
import { motion } from "framer-motion";

export default function YaxisPositive({ children, classes = "" }: any) {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-50%" },
  };
  return (
    <motion.div
      className={classes}
      whileInView="visible"
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.5, bounce: 0.1, type: "spring" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
