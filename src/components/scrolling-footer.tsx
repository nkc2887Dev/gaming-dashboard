"use client";

import { useEffect, useState } from "react";
import { LucideMegaphone } from "lucide-react";
import styles from "@/styles/SlidingFooter.module.css";

const SlidingFooter = ({ messages }: { messages: string[] }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#16A3BB] to-[#03364c] w-full">
      <div className="relative flex items-center w-full overflow-hidden">
        <div className={`text-white gap-8 mt-1 ${styles.text} ${isAnimating ? styles.animate : ""}`}>
            {messages.map((message, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 text-sm">
                <LucideMegaphone />
                <span>{message}</span>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingFooter;