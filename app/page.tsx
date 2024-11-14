"use client"

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full z-[-1] h-screen top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration: 0.5, delay: 0}}
          key="image-container"
        >
          <Image src={"/night-view-2172718_1280.jpg"} alt="no-image" layout="fill" />
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
}