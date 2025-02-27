"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ADMIN_splashpopup from "@/assets/image/ADMIN_splashpopup.jpg";

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      aria-hidden={!isVisible}
    >
      <div className="relative rounded-lg shadow-lg max-w-md mx-auto">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <Image
          src={ADMIN_splashpopup}
          alt="Promo"
          width={1000}
          height={200}
          className="rounded-md"
          priority
        />
      </div>
    </div>
  );
}
