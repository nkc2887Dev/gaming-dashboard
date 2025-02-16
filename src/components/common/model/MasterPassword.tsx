import React, { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import Input from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface MasterModalProps {
    title: string
    isOpen: boolean
    onClose: () => void
}

const MasterPasswordModal = ({ isOpen, onClose, title }: MasterModalProps) => {
  if (!isOpen) return null;
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl absolute top-10 shadow-md w-1/3">
        <div className="flex justify-between items-center px-2 border-b bg-gradient-to-b from-[#59C4D6] to-[#156679]">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 font-bold hover:text-gray-200 rounded-lg p-2"
          >
            ✖
          </button>
        </div>
        <div className="p-3">
          <div className="space-y-1 flex items-center justify-between px-2">
            <label className="font-bold text-black text-md">
              Master Password :
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73819A]"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-2 border-t gap-2">
          <GradientButton
            className="w-lg rounded-l-lg "
            label="Submit"
            size="lg"
          />
          <GradientButton
            className="w-lg rounded-l-lg"
            label="Cancel"
            size="lg"
            onclick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default MasterPasswordModal;
