"use client";
import React from "react";
import { motion } from "framer-motion";

export default function XaxisNegative({ children, classes = "" }: any) {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "50%" },
  };
  return (
    <motion.div
      className={classes}
      whileInView="visible"
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.5, bounce: 0.4, type: "spring" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
