import React from "react";
import ToolTip from "@/components/ui/tooltip";

interface UserData {
  id: string;
  type: string;
  givenBalance: number;
  availableBalance: number;
  upLine: number;
  downLine: number;
  currentPL: number;
  myPL: number;
  exposure: number;
}

const userData: UserData = {
  id: "dmmo123",
  type: "Admin",
  givenBalance: 100.0,
  availableBalance: 50.0,
  upLine: 0,
  downLine: 0,
  currentPL: 0,
  myPL: 0,
  exposure: 0,
};

const tooltips = {
  id: "user name.",
  type: "user role.",
  givenBalance: "Aapko upar se diya gaya balance.",
  availableBalance: "Aapka upyog ke liye uplabdh balance.",
  upLine: "Aapke upline ka count.",
  downLine: "Aapke downline ka count.",
  currentPL: "Aapka vartaman labh ya haani.",
  exposure: "Aapka kul risk exposure.",
  myPL: "Aapka vyaktigat labh ya haani.",
};

const UserStats: React.FC = () => {
  return (
    <div className="text-white p-4 px-16 flex justify-between items-center rounded-lg shadow-md">
      <div className="flex flex-col">
        <p className="relative group">
          User ID:
          <ToolTip text={tooltips.id} value={userData.id} className="" />
        </p>
        <p className="relative group">
          User Type:
          <ToolTip text={tooltips.type} value={userData.type} className="" />
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          Given Bal:
          <ToolTip text={tooltips.givenBalance} value={userData.givenBalance.toFixed(2)} className="text-green-400" />
        </p>
        <p className="relative group">
          Available:
          <ToolTip text={tooltips.availableBalance} value={userData.availableBalance.toFixed(2)} className="text-green-400" />
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          Up Line:
          <ToolTip text={tooltips.upLine} value={userData.upLine} className="" />
        </p>
        <p className="relative group">
          Down Line:
          <ToolTip text={tooltips.downLine} value={userData.downLine} className="" />
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          Current P&L:
          <ToolTip text={tooltips.currentPL} value={userData.currentPL} className="" />
        </p>
        <p className="relative group">
          Exposure:
          <ToolTip text={tooltips.exposure} value={userData.exposure} className="" />
        </p>
      </div>
      <div className="flex flex-col">
        <p className="relative group">
          My P&L:
          <ToolTip text={tooltips.myPL} value={userData.myPL} className="" />
        </p>
      </div>
    </div>
  );
};

export default UserStats;
