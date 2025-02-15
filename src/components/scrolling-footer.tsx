"use client";

import { motion } from "framer-motion";
import { LucideMegaphone } from "lucide-react";

interface ScrollingFooterProps {
  messages: string[];
  speed?: number;
}

export default function ScrollingFooter({
  messages,
  speed = 30,
}: ScrollingFooterProps) {
  const repeatedMessages = [...messages, ...messages];

  return (
    <div className="bg-gradient-to-b from-[#16A3BB] to-[#03364c] w-full">
      <div className="relative flex items-center w-full overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          className="whitespace-nowrap text-white flex items-center gap-8"
        >
          {repeatedMessages.map((message, idx) => (
            <span key={idx} className="inline-flex items-center gap-1 text-sm">
              <LucideMegaphone />
              {message}
              <span></span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
