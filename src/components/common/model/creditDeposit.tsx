import React, { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import Input from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@headlessui/react";
import { MasterModalProps } from "@/@types/common";

const CreditDepositModal = ({ isOpen, onClose, title }: MasterModalProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

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
        <div className="p-2 bg-[#F0F8FF]">
          <div className="max-w-2xl mx-auto p-2 space-y-6">
            {/* Available Balance Section */}
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div>
                <Label>My Available</Label>
                <Input
                  value="50"
                  readOnly
                  className="!bg-[#5DC9DB] text-black border border-gray-600"
                />
              </div>
              <div>
                <Label>After</Label>
                <Input
                  value="0"
                  readOnly
                  className="!bg-[#5DC9DB] text-black border border-gray-600"
                />
              </div>
            </div>

            {/* Credit Reference Section */}
            <Card className="p-4 border-dashed border-black">
              <div className="grid grid-cols-2 gap-4 text-sm text-center">
                <div>
                  <Label>Old Cred Ref.</Label>
                  <Input
                    value="50"
                    readOnly
                    className="!bg-[#5DC9DB] text-black border border-gray-600"
                  />
                </div>
                <div>
                  <Label>New Cred Ref.</Label>
                  <Input type="number" className=" border border-gray-600" />
                </div>
              </div>
            </Card>

            {/* Deposit Section */}
            <Card className="p-4 border-dashed border border-black space-y-4 bg-[#E9F4FA]">
              <div className="flex flex-wrap items-center gap-4">
                <Label className="min-w-[140px] whitespace-nowrap font-semibold">
                  testsuperadmin123
                </Label>
                <Input
                  value="50"
                  readOnly
                  className="!bg-[#5DC9DB] text-black border border-gray-600 w-[120px] text-center rounded-md"
                />
                <Input
                  readOnly
                  className="!bg-[#5DC9DB] text-black border border-gray-600 w-[120px] text-center rounded-md"
                />
              </div>

              {/* Add Deposit */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Label className="min-w-[140px] font-semibold">
                  Add Deposit
                </Label>
                <Input
                  type="number"
                  className="flex-1 border border-gray-600 px-3 py-2 rounded-md"
                />
              </div>

              {/* Remarks */}
              <div className="flex flex-wrap items-start gap-4 mt-4">
                <Label className="min-w-[140px] font-semibold">Remarks</Label>
                <Textarea className="flex-1 h-16 resize-none border border-gray-600 px-3 py-2 rounded-md" />
              </div>
            </Card>
          </div>
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
            className="rounded-l-lg w-1/5 text-sm"
            label="Submit"
          />
          <GradientButton
            className="rounded-l-lg w-1/5 text-sm"
            label="Cancel"
            onclick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditDepositModal;
