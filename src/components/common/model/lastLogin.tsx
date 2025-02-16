import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";

interface MasterModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const LastLoginModal = ({ isOpen, onClose, title }: MasterModalProps) => {
  if (!isOpen) return null;
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl absolute top-10 shadow-md w-1/2">
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
          <div className="bg-white p-4 rounded-lg mb-4 flex gap-4 items-end border">
            <div>
              <label className="block text-sm mb-1">From Date:</label>
              <DatePicker
                selected={fromDate}
                onChange={(date: Date | null) => setFromDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={5}
                dateFormat="dd/MM/yyyy HH:mm"
                className="border border-gray-400 px-3 py-2 rounded-md text-center w-[180px]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">To Date:</label>
              <DatePicker
                selected={toDate}
                onChange={(date: Date | null) => setToDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={5}
                dateFormat="dd/MM/yyyy HH:mm"
                className="border border-gray-400 px-3 py-2 rounded-md text-center w-[180px]"
              />
            </div>
            <GradientButton
              className="w-lg rounded-l-lg"
              label="Go"
              size="lg"
            />
            <Button
              variant="destructive"
              className="w-lg rounded-r-lg"
              size="lg"
            >
              Reset
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-[#016A82] text-white text-left">
                  <th className="px-4 py-2 border-r">Date & Time</th>
                  <th className="px-4 py-2 border-r">IP</th>
                  <th className="px-4 py-2 border-r">Device</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300 bg-gray-100">
                  <td className="px-4 py-2 border-r">10/2/2025, 9:19:13 pm</td>
                  <td className="px-4 py-2 border-r">152.58.34.51</td>
                  <td className="px-4 py-2 border-r">DESKTOP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastLoginModal;
