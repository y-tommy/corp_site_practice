"use client"

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <AnimatePresence mode="wait">
        <div className="top-0 left-0 w-full h-96 z-[-1]">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{duration: 10, delay: 10}}
            key="image-container"
          >
            <Image src={"/night-view-2172718_1280.jpg"} alt="no-image" layout="fill" />
          </motion.div>
          <Image src={"/night-view-2172718_1280.jpg"} alt="no-image" layout="fill" />
        </div>
      </AnimatePresence>
      
    </div>
  );
}