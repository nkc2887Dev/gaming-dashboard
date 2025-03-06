"use client";

import { LucideMegaphone } from "lucide-react";
import styles from "@/styles/SlidingFooter.module.css";

const SlidingFooter = ({ messages }: { messages: string[] }) => {
  return (
    <div className="bg-gradient-to-b from-[#16A3BB] to-[#03364c] w-full">
      <div className="relative flex items-center w-full overflow-hidden">
        <div className={`text-white mt-1 ${styles.text} ${styles.animate}`}>
          {messages.map((message, idx) => (
            <div key={idx} className="inline-flex items-center gap-1 text-sm">
              <LucideMegaphone />
              <span>{message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingFooter;
