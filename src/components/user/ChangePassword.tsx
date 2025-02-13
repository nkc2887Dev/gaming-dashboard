import React, { useState } from "react";
import Input from "../ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPassword("");
    setNewPassword("");
    setRePassword("");
  };

  return (
    // <div className="flex items-left justify-center">
    <div className="w-full max-w-xs p-6 ">
      <h2 className="font-bold">Change Password</h2>
      <form onSubmit={handleSubmit} className="py-2 space-y-1">
        {/* Old Password */}
        <div className="space-y-1">
          <label className="text-black text-sm w-full">Old Password:</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {/* New Password */}
        <div className="space-y-1">
          <label className="text-black text-sm">New Password:</label>
          <div className="relative">
            <Input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showNewPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {/* ReType Password */}
        <div className="space-y-1">
          <label className="text-black text-sm">ReType Password:</label>
          <div className="relative">
            <Input
              type={showRePassword ? "text" : "password"}
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowRePassword(!showRePassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showRePassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {/* Login Button */}
        <div className="space-y-1 !mt-2">
          <Button
            type="submit"
            className="bg-gradient-to-b from-[#00a3cc] to-[#008fb3] hover:from-[#008fb3] hover:to-[#007a99] text-white font-medium rounded-md shadow-md"
          >
            Change Password
          </Button>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default ChangePassword;
