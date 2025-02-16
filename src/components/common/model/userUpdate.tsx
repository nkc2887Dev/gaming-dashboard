import React, { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import Input from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MasterModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const UserUpdateModal = ({ isOpen, onClose, title }: MasterModalProps) => {
  if (!isOpen) return null;
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [client, setClient] = useState("");
  const [reference, setReference] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white !rounded-xl absolute top-10 shadow-md w-1/3">
        <div className="flex justify-between items-center px-2 border-b bg-gradient-to-b from-[#59C4D6] to-[#156679]">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 font-bold hover:text-gray-200 rounded-lg p-2"
          >
            ✖
          </button>
        </div>
        <div className="p-6 bg-[#F0F8FF]">
          <Card className="relative border border-black">
            <div className="bg-[#F0F8FF] absolute -top-3 left-4 px-2 text-lg font-bold">
              Account Details:
            </div>
            <CardContent className="pt-10 w-full space-y-4">
              <div className="space-y-2">
                <label className="text-black text-sm">
                  Account Type: SuperMaster
                </label>
              </div>
              <div className="space-y-2">
                <label className="text-black text-sm">Client Name:</label>
                <Input
                  type={"text"}
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  className="text-sm font-bold h-9 px-4 py-2 w-full bg-white border border-gray-400 text-black rounded-md pr-10 focus:outline-none"
                  required
                  placeholder="Client Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-black text-sm">Reference Name:</label>
                <Input
                  type={"text"}
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="text-sm font-bold h-9 px-4 py-2 w-full bg-white border border-gray-400 text-black rounded-md pr-10 focus:outline-none"
                  required
                  placeholder="Reference Name"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-end p-2 border-t gap-2 bg-[#F0F8FF]">
          <div className="relative w-2/5">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm font-bold h-9 px-4 py-2 w-full bg-white border border-gray-400 text-black rounded-md pr-10 focus:outline-none"
              required
              autoComplete="current-password"
              placeholder="Master Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73819A]"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <GradientButton
            className="rounded-l-lg w-1/3 text-sm"
            label="Update Account"
          />
        </div>
      </div>
    </div>
  );
};

export default UserUpdateModal;
