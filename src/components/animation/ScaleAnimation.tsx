"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ScaleAnimation({ children, classes = "" }: any) {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.1 },
  };
  return (
    <motion.div
      className={classes}
      whileInView="visible"
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
